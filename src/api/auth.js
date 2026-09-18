const API_URL = "/api/auth";
const SESSION_TOKEN_KEY = "notnetflix_session_token";
const CURRENT_USER_KEY = "currentUser";

async function request(path, options = {}) {
  const token = localStorage.getItem(SESSION_TOKEN_KEY);
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Unable to connect to the server.");
  return data;
}

export async function signUp(username, password) {
  return request("/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
}

export async function signIn(username, password) {
  const data = await request("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  localStorage.setItem(SESSION_TOKEN_KEY, data.token);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(data.user));
  return data.user;
}

export async function signOut() {
  try {
    await request("/logout", { method: "POST" });
  } finally {
    localStorage.removeItem(SESSION_TOKEN_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function hasSession() {
  return Boolean(localStorage.getItem(SESSION_TOKEN_KEY));
}
