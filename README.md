# KanbanExpressAPi

REST API for a Kanban task manager: users, boards, columns, tasks and subtasks, with JWT auth. It is the back end of [kanbanwithapi](https://github.com/lucaszebre/kanbanwithapi), the React front end.

## What it does

- Register and log in with email and password (bcrypt hashes, RS256-signed access and refresh tokens)
- Boards with their columns, tasks and subtasks, scoped to the logged-in user
- Ordered columns, tasks and subtasks (an `index` field on each)
- Moving a task to another column; toggling a subtask
- Request bodies validated with Zod

## Stack

Node.js, TypeScript, Express 4, Prisma 4 (PostgreSQL), jsonwebtoken, bcrypt, Zod, cookie-parser, cors, morgan.

## Run locally

You need Node.js and a PostgreSQL database (a local Docker container is fine).

```bash
git clone https://github.com/lucaszebre/KanbanExpressAPi.git
cd KanbanExpressAPi
npm install            # also runs `prisma generate`
cp .env.example .env   # then fill in the values below
npx prisma migrate deploy
npm run dev            # http://localhost:5000 with the example PORT
```

`npm run build` compiles to `dist/` and `npm start` runs `dist/index.js`.

Environment variables (see `.env.example`; `src/env.ts` validates them at startup and exits on anything missing):

| Variable | Purpose |
| --- | --- |
| `NODE_ENV`, `PORT`, `LOG_LEVEL` | Runtime settings. `PORT` is 5000 in the example to match the front end; the code default is 9999 |
| `DATABASE_URL`, `DIRECT_URL` | PostgreSQL connection strings (both required) |
| `TRUST_ORIGIN` | Allowed CORS origin, e.g. `http://localhost:3000` for the front end's dev server |
| `PRIVATE_KEY_ACCESS`, `PUBLIC_KEY_ACCESS` | RSA PEM key pair used to sign and verify access tokens |
| `PRIVATE_KEY_REFRESH`, `PUBLIC_KEY_REFRESH` | RSA PEM key pair for refresh tokens |
| `JWT_ACCESS_EXPIRES_IN`, `JWT_REFRESH_EXPIRES_IN` | Token lifetimes, e.g. `1h`, `7d` |
| `JWT_ISSUER`, `JWT_AUDIENCE` | Claims checked when verifying tokens |
| `JWT_SECRET` | Required by the env schema, not used for signing |

Generate key pairs outside the repository, for example `openssl genrsa -out access.pem 2048` and `openssl rsa -in access.pem -pubout -out access.pub.pem`, then paste the PEM text into `.env` as double-quoted multi-line values. Never commit `.env` or key files.

### Using it with the front end

Run this API on port 5000 and set `VITE_BASE_URL_API="http://localhost:5000/"` in the front end's `.env`. The front end stores the access token in an `accessToken` cookie, which is what the API checks on every `/api` route.

## Endpoints

`/register` and `/login` are public. Every other route lives under `/api` and needs the `accessToken` cookie.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/register` | Create an account, returns the user and a token pair |
| POST | `/login` | Log in, returns the user and a token pair |
| GET | `/api/me` | Current user from the token |
| PATCH | `/api/refresh-token` | New access token from the `refreshToken` cookie |
| POST | `/api/logout` | Clear tokens |
| GET, POST | `/api/boards` | List the user's boards / create a board |
| GET, DELETE | `/api/boards/:boardId` | Get / delete one board |
| PATCH | `/api/boards/:id` | Update a board |
| POST | `/api/boards/:boardId/columns` | Add columns to a board |
| GET, PATCH, DELETE | `/api/columns/:id` | Get / update / delete a column |
| POST | `/api/columns/:id/tasks` | Create a task in a column |
| GET, PATCH, DELETE | `/api/tasks/:id` | Get / update / delete a task |
| PATCH | `/api/tasks/:id/column/:columnId` | Move a task to another column |
| PATCH | `/api/subtasks/:id` | Update (toggle) a subtask |

## Status

Built in 2023 and reworked in 2025 as a portfolio project; not actively maintained. There is currently no public deployment.

## License

MIT
