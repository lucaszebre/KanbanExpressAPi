import { User } from "@prisma/client";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../db";
import env from "../env";
import { comparePasswords, hashPassword } from "../modules/auth";
import { CreateUserSchema, LoginSchema } from "../types";
import {
  generateAccesToken,
  generateTokenPair,
  verifyAccesToken,
} from "../utils/jwt.utils";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const logout = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { user } = req;

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: null,
      },
    });

    res.clearCookie("refreshToken");
    res.clearCookie("accessToken");
    res.setHeader("Clear-Site-Data", '"cache"');
    res.end();
  } catch (error) {
    console.error("could not logout", error);
  }
};

export const register = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<
  Response<{ user: User; accesToken: string; refreshToken: string }>
> => {
  const { name, email, password } = CreateUserSchema.parse(req.body);
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (existingUser) {
      return res.status(404).json({ error: "Email already in use" });
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: await hashPassword(password),
        name: name,
      },
    });

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = generateTokenPair(payload);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ user, accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const login = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<
  Response<{ user: User; accesToken: string; refreshToken: string }>
> => {
  try {
    const { email, password } = LoginSchema.parse(req.body);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = generateTokenPair(payload);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ user, accessToken, refreshToken });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    res.status(401).json({ message: "need a refresh token" });
  }

  try {
    const decoded = verifyAccesToken(refreshToken) as JwtPayload;

    const user = await prisma.user.findUnique({
      where: {
        refreshToken,
      },
    });

    console.log(user, "user");

    if (!user) {
      res.status(401).json({ message: "Invalid refresh token" });
    }

    if (decoded.id !== user.id) {
      res.status(401).json({ message: "Invalid refresh token" });
    }

    if (decoded.email !== user.email) {
      res.status(401).json({ message: "Invalid refresh token" });
    }

    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = generateAccesToken(payload);

    return res.status(200).json({ accessToken });
  } catch (error) {}
};

export const getCurrentUser = (
  req: AuthenticatedRequest,
  res: Response
): Promise<Response> => {
  const bearer = req.cookies.accessToken;

  if (!bearer) {
    res.status(401).json({ message: "not authorized" });
    return;
  }

  try {
    const user = verifyAccesToken(bearer);

    res.json({ id: user.id, email: user.email });
  } catch (e) {
    res.status(500).json({ message: "server error" });
    return;
  }
};
