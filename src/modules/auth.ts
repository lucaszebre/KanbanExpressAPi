import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthenticatedRequest = Request & {
  user?: string | JwtPayload;
};

export const comparePasswords = (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 5);
};
export const createJWT = (user: User): string => {
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  return token;
};

export const protect = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }
};
