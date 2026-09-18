# NotNetflix

The app includes a local authentication API. Users are saved to `backend/data/users.json`; passwords are salted and hashed with Node's `scrypt`, so plaintext passwords are never written to disk.

## Run locally

In one terminal, start the API:

```bash
npm run api
```

In a second terminal, start the Vite frontend:

```bash
npm run dev
```

Vite forwards `/api` requests to `http://localhost:4000`. Create an account from the signup screen and then sign in.

To run the built application and API together, build first and then start the server:

```bash
npm run build
npm start
```

The API exposes signup, login, logout, and current-user endpoints. Login sessions expire after seven days or when the API server restarts.

## Live TMDB catalogue

The home page can load live Popular, Now Playing, Top Rated, and Coming Soon movie rows from TMDB. The access token is used only by the backend and is never sent to the browser.

1. Create a free TMDB account and copy the **API Read Access Token** from [TMDB API settings](https://www.themoviedb.org/settings/api).
2. Copy `.env.example` to a new `.env` file in the project root.
3. Replace the placeholder value in `.env` with your token:

   ```env
   TMDB_ACCESS_TOKEN=your_token_here
   ```

4. Restart `npm run api`.

Without a token, the app keeps working and displays the local catalogue instead.
