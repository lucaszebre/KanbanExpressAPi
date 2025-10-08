import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import env from "./env.js";
import { login, register } from "./handlers/user.js";
import { protect } from "./modules/auth/index.js";
import router from "./router.js";

const app: Application = express();

app.use(
  cors({
    origin: env.TRUST_ORIGIN || "http://localhost:3000",
    methods: ["GET", "PATCH", "POST", "DELETE", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization", "X-App-Identifier"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.post("/register", register);
app.post("/login", login);

app.use("/api", protect, router);

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({ message: `Internal server error: ${err.message}` });
});

app.use((req: Request, res: Response): void => {
  res.status(404).json({ message: "Not Found" });
});

export default app;
