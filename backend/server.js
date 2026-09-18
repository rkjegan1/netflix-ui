import { randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const currentDirectory = dirname(fileURLToPath(import.meta.url));
const usersFile = join(currentDirectory, "data", "users.json");
const distDirectory = resolve(currentDirectory, "..", "dist");
const sessions = new Map();
const sessionDuration = 1000 * 60 * 60 * 24 * 7;
const movieCacheDuration = 1000 * 60 * 15;
let movieCache = null;

const movieRows = [
  { title: "Popular Now", endpoint: "/movie/popular" },
  { title: "Now Playing", endpoint: "/movie/now_playing" },
  { title: "Top Rated", endpoint: "/movie/top_rated" },
  { title: "Coming Soon", endpoint: "/movie/upcoming" },
];

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

async function readUsers() {
  try {
    const file = await readFile(usersFile, "utf8");
    const users = JSON.parse(file);
    return Array.isArray(users) ? users : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function saveUsers(users) {
  await mkdir(dirname(usersFile), { recursive: true });
  const temporaryFile = `${usersFile}.${process.pid}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(users, null, 2)}\n`, { mode: 0o600 });
  await rename(temporaryFile, usersFile);
}

async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const key = await scrypt(password, salt, 64);
  return `${salt}:${key.toString("hex")}`;
}

async function passwordMatches(password, storedHash) {
  const [salt, storedKey] = storedHash.split(":");
  if (!salt || !storedKey) return false;

  const derivedKey = await scrypt(password, salt, 64);
  const storedKeyBuffer = Buffer.from(storedKey, "hex");
  return (
    storedKeyBuffer.length === derivedKey.length &&
    timingSafeEqual(storedKeyBuffer, derivedKey)
  );
}

function validateCredentials(username, password) {
  if (!/^[a-zA-Z0-9_.-]{3,32}$/.test(username)) {
    return "Username must be 3–32 characters and use only letters, numbers, dots, hyphens, or underscores.";
  }

  if (typeof password !== "string" || password.length < 8 || password.length > 128) {
    return "Password must be between 8 and 128 characters.";
  }

  return null;
}

function publicUser(user) {
  return { id: user.id, username: user.username, createdAt: user.createdAt };
}

function createSession(userId) {
  const token = randomBytes(32).toString("base64url");
  sessions.set(token, { userId, expiresAt: Date.now() + sessionDuration });
  return token;
}

function getSessionUserId(request) {
  const authorization = request.headers.authorization;
  if (!authorization?.startsWith("Bearer ")) return null;

  const token = authorization.slice(7);
  const session = sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }

  return session.userId;
}

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
}

async function readJsonBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > 16 * 1024) throw new Error("Request body is too large.");
    chunks.push(chunk);
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new Error("Request body must be valid JSON.");
  }
}

async function handleAuth(request, response, pathname) {
  if (request.method === "POST" && pathname === "/api/auth/signup") {
    const { username = "", password = "" } = await readJsonBody(request);
    const normalizedUsername = typeof username === "string" ? username.trim() : "";
    const error = validateCredentials(normalizedUsername, password);
    if (error) return sendJson(response, 400, { error });

    const users = await readUsers();
    if (users.some((user) => user.username.toLowerCase() === normalizedUsername.toLowerCase())) {
      return sendJson(response, 409, { error: "That username is already in use." });
    }

    const user = {
      id: randomUUID(),
      username: normalizedUsername,
      passwordHash: await hashPassword(password),
      createdAt: new Date().toISOString(),
    };
    await saveUsers([...users, user]);
    return sendJson(response, 201, { message: "Account created. You can now sign in." });
  }

  if (request.method === "POST" && pathname === "/api/auth/login") {
    const { username = "", password = "" } = await readJsonBody(request);
    const normalizedUsername = typeof username === "string" ? username.trim() : "";
    const users = await readUsers();
    const user = users.find((entry) => entry.username.toLowerCase() === normalizedUsername.toLowerCase());

    if (!user || typeof password !== "string" || !(await passwordMatches(password, user.passwordHash))) {
      return sendJson(response, 401, { error: "Invalid username or password." });
    }

    const token = createSession(user.id);
    return sendJson(response, 200, { token, user: publicUser(user) });
  }

  if (request.method === "GET" && pathname === "/api/auth/me") {
    const userId = getSessionUserId(request);
    if (!userId) return sendJson(response, 401, { error: "Authentication required." });

    const user = (await readUsers()).find((entry) => entry.id === userId);
    if (!user) return sendJson(response, 401, { error: "Session is no longer valid." });
    return sendJson(response, 200, { user: publicUser(user) });
  }

  if (request.method === "POST" && pathname === "/api/auth/logout") {
    const authorization = request.headers.authorization;
    if (authorization?.startsWith("Bearer ")) sessions.delete(authorization.slice(7));
    return sendJson(response, 200, { message: "Signed out." });
  }

  return false;
}

function toMovieCard(movie, category) {
  const imagePath = movie.backdrop_path || movie.poster_path;
  if (!imagePath) return null;

  return {
    id: `tmdb-${movie.id}`,
    title: movie.title || movie.name,
    category,
    rating: Number((movie.vote_average || 0).toFixed(1)),
    image: `https://image.tmdb.org/t/p/w780${imagePath}`,
    link: `https://www.themoviedb.org/movie/${movie.id}`,
  };
}

async function fetchMovieRows() {
  if (movieCache && Date.now() - movieCache.createdAt < movieCacheDuration) {
    return movieCache.data;
  }

  const accessToken = process.env.TMDB_ACCESS_TOKEN;
  if (!accessToken) {
    const error = new Error("TMDB is not configured. Add TMDB_ACCESS_TOKEN to your .env file.");
    error.statusCode = 503;
    throw error;
  }

  const rows = await Promise.all(
    movieRows.map(async ({ title, endpoint }) => {
      const response = await fetch(`https://api.themoviedb.org/3${endpoint}?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json",
        },
      });

      if (!response.ok) {
        const error = new Error("TMDB could not load the movie catalogue. Check your access token.");
        error.statusCode = response.status === 401 ? 401 : 502;
        throw error;
      }

      const data = await response.json();
      return {
        title,
        movies: data.results.map((movie) => toMovieCard(movie, title)).filter(Boolean),
      };
    }),
  );

  movieCache = { createdAt: Date.now(), data: rows };
  return rows;
}

async function serveStatic(response, pathname) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const candidate = resolve(distDirectory, `.${requestedPath}`);
  const pathFromDist = relative(distDirectory, candidate);
  const isInsideDist = !pathFromDist.startsWith("..") && !pathFromDist.includes(":");

  if (isInsideDist) {
    try {
      const content = await readFile(candidate);
      response.writeHead(200, {
        "Content-Type": contentTypes[extname(candidate)] || "application/octet-stream",
      });
      response.end(content);
      return;
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  try {
    const index = await readFile(join(distDirectory, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(index);
  } catch (error) {
    if (error.code === "ENOENT") {
      sendJson(response, 404, { error: "Frontend build not found. Run npm run build first." });
      return;
    }
    throw error;
  }
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const pathname = normalize(url.pathname).replace(/\\/g, "/");

  try {
    if (request.method === "OPTIONS") {
      response.writeHead(204, {
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      });
      response.end();
      return;
    }

    if (pathname === "/api/health") return sendJson(response, 200, { status: "ok" });
    if (request.method === "GET" && pathname === "/api/movies") {
      const categories = await fetchMovieRows();
      return sendJson(response, 200, { categories });
    }
    if (pathname.startsWith("/api/auth/")) {
      const handled = await handleAuth(request, response, pathname);
      if (handled === false) sendJson(response, 404, { error: "Route not found." });
      return;
    }

    await serveStatic(response, pathname);
  } catch (error) {
    console.error(error);
    if (!response.headersSent) {
      sendJson(response, error.statusCode || 500, {
        error: error.statusCode ? error.message : "Something went wrong on the server.",
      });
    }
  }
});

server.listen(process.env.PORT || 4000, () => {
  console.log(`API and production frontend running at http://localhost:${process.env.PORT || 4000}`);
});
