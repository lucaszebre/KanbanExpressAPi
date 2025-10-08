import { sign, verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

export const generateAccessToken = async (
  payload: JWTPayload,
  secret: string
): Promise<string> => {
  return await sign(
    {
      ...payload,
      exp: Math.floor(Date.now() / 1000) + 60 * 15, // 15 minutes
    },
    secret
  );
};

export const generateRefreshToken = async (
  payload: JWTPayload,
  secret: string
): Promise<string> => {
  return await sign(
    {
      ...payload,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
    },
    secret
  );
};

export const verifyAccessToken = async (
  token: string,
  secret: string
): Promise<JWTPayload> => {
  try {
    const decoded = await verify(token, secret);
    return decoded as JWTPayload;
  } catch (error) {
    throw new Error(`Failed to verify token: `);
  }
};

export const generateTokenPair = async (
  payload: JWTPayload,
  accessSecret: string,
  refreshSecret: string
) => {
  return {
    accessToken: await generateAccessToken(payload, accessSecret),
    refreshToken: await generateRefreshToken(payload, refreshSecret),
  };
};
