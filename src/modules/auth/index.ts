import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyAccesToken } from "../../utils/jwt.utils";

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

export const protect = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const bearer = req.cookies.accessToken;

  if (!bearer) {
    console.log("we are inside the not authorized motherfucker");
    res.status(401).json({ message: "not authorized" });
    return;
  }

  // const [, token] = bearer.split(" ");

  // if (!token) {
  //   res.status(401).json({ message: "not authorized" });
  //   return;
  // }

  try {
    const user = verifyAccesToken(bearer);

    req.user = user;
    next();
  } catch (e) {
    res.status(500).json({ message: "server error" });
    return;
  }
};
