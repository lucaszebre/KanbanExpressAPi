import { Context } from "hono";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import prismaClients from "../lib/prismaClient.js";
import { CreateUserSchema, HonoContext, LoginSchema } from "../types/index.js";
import { comparePasswords, hashPassword } from "../utils/auth.js";
import {
  generateAccessToken,
  generateTokenPair,
  verifyAccessToken,
} from "../utils/jwt.utils.js";

export const logout = async (c: Context<HonoContext>) => {
  try {
    const userId = c.get("userId");

    if (!userId) {
      return c.json({ error: "User not authenticated" }, 401);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });

    deleteCookie(c, "refreshToken");
    deleteCookie(c, "accessToken");

    return c.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Could not logout", error);
    return c.json({ error: "Server error" }, 500);
  }
};

export const register = async (c: Context<HonoContext>) => {
  try {
    const body = await c.req.json();
    const validation = CreateUserSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const { name, email, password } = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return c.json({ error: "Email already in use" }, 404);
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        password: await hashPassword(password),
        name: name,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = await generateTokenPair(
      payload,
      c.env.JWT_ACCESS_SECRET,
      c.env.JWT_REFRESH_SECRET
    );

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", // Changed from "Strict" to "None" for cross-origin requests
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", // Changed from "Strict" to "None" for cross-origin requests
      maxAge: 15 * 60, // 15 minutes
    });

    return c.json({ user, message: "Registration successful" });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Server error" }, 500);
  }
};

export const login = async (c: Context<HonoContext>) => {
  try {
    const body = await c.req.json();
    const validation = LoginSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const { email, password } = validation.data;
    const prisma = await prismaClients.fetch(c.env.DB);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return c.json({ message: "Invalid credentials" }, 401);
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return c.json({ message: "Invalid credentials" }, 401);
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const { accessToken, refreshToken } = await generateTokenPair(
      payload,
      c.env.JWT_ACCESS_SECRET,
      c.env.JWT_REFRESH_SECRET
    );

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken,
      },
    });

    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", // Changed from "Strict" to "None" for cross-origin requests
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", // Changed from "Strict" to "None" for cross-origin requests
      maxAge: 15 * 60, // 15 minutes
    });

    return c.json({ user, message: "Login successful" });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal server error" }, 500);
  }
};

export const refreshToken = async (c: Context<HonoContext>) => {
  try {
    const refreshToken = getCookie(c, "refreshToken");

    if (!refreshToken) {
      return c.json({ message: "Need a refresh token" }, 401);
    }

    const decoded = await verifyAccessToken(
      refreshToken,
      c.env.JWT_REFRESH_SECRET
    );
    const prisma = await prismaClients.fetch(c.env.DB);

    const user = await prisma.user.findUnique({
      where: {
        refreshToken,
      },
    });

    if (!user) {
      return c.json({ message: "Invalid refresh token" }, 401);
    }

    if (decoded.id !== user.id) {
      return c.json({ message: "Invalid refresh token" }, 401);
    }

    if (decoded.email !== user.email) {
      return c.json({ message: "Invalid refresh token" }, 401);
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const accessToken = await generateAccessToken(
      payload,
      c.env.JWT_ACCESS_SECRET
    );

    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None", // Changed from "Strict" to "None" for cross-origin requests
      maxAge: 15 * 60, // 15 minutes
    });

    return c.json({ message: "Token refreshed successfully" });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Invalid refresh token" }, 401);
  }
};

export const getCurrentUser = async (c: Context<HonoContext>) => {
  try {
    const accessToken = getCookie(c, "accessToken");

    if (!accessToken) {
      return c.json({ message: "No access token found in cookies" }, 401);
    }

    const user = await verifyAccessToken(accessToken, c.env.JWT_ACCESS_SECRET);

    return c.json({ id: user.id, email: user.email });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Server error" }, 500);
  }
};
