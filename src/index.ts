import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { login, register } from "./handlers/user.js";
import { protect } from "./middleware/auth.js";
import router from "./router.js";

const app = new Hono<{
  Bindings: {
    NODE_ENV: string;
    MY_KV: KVNamespace;
    DB: D1Database;
    DATABASE_URL: string;
    DIRECT_URL: string;
    PORT: string;
    JWT_SECRET: string;
    TRUST_ORIGIN: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    JWT_REFRESH_EXPIRES_IN: string;
    JWT_ACCESS_EXPIRES_IN: string;
    JWT_ISSUER: string;
    JWT_AUDIENCE: string;
  };
  Variables: {
    userId: string;
  };
}>();

app.use(
  "*",
  cors({
    origin: (_, c) => c.env.TRUST_ORIGIN || "http://localhost:3000",
    allowHeaders: ["Content-Type", "Authorization", "X-App-Identifier"],
    allowMethods: ["GET", "PATCH", "POST", "DELETE", "HEAD"],
    credentials: true,
  })
);

app.use("*", logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/register", register);
app.post("/login", login);

app.use("/api/*", protect);

app.route("/api", router);

app.onError((err, c) => {
  console.error(err.stack);
  return c.json({ message: `Internal server error: ${err.message}` }, 500);
});

app.notFound((c) => {
  return c.json({ message: "Not Found" }, 404);
});

export default app;
