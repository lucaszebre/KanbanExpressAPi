import { Context, Next } from "hono";
import { getCookie } from "hono/cookie";
import { HonoContext } from "../types/index.js";
import { verifyAccessToken } from "../utils/jwt.utils.js";

export const protect = async (c: Context<HonoContext>, next: Next) => {
  try {
    const bearer = getCookie(c, "accessToken");

    if (!bearer) {
      return c.json({ message: "No access token found in cookies" }, 401);
    }

    const user = await verifyAccessToken(bearer, c.env.JWT_ACCESS_SECRET);

    c.set("userId", user.id as string);

    await next();
  } catch (e) {
    console.error("Token verification error:", e);
    return c.json({ message: "server error" }, 500);
  }
};
