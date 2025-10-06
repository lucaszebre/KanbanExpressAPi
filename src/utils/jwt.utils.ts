import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import ms from "ms";
import env from "../env";
export const generateAccesToken = (payload: JwtPayload): string => {
  const privateKey = env.PRIVATE_KEY_ACCESS;
  const options: SignOptions = {
    algorithm: "RS256",
    expiresIn: env.JWT_ACCESS_EXPIRES_IN as ms.StringValue,
    issuer: env.JWT_ISSUER,
    audience: env.JWT_AUDIENCE,
  };

  return jwt.sign(payload, privateKey, options);
};

export const generateRefreshToken = (payload: JwtPayload): string => {
  const privateKey = env.PRIVATE_KEY_REFRESH;
  const options: SignOptions = {
    algorithm: "RS256",
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as ms.StringValue,
    issuer: env.JWT_ISSUER,
    audience: env.JWT_AUDIENCE,
  };

  return jwt.sign(payload, privateKey, options);
};

export const verifyAccesToken = (token: string): JwtPayload => {
  try {
    const publicKey = env.PUBLIC_KEY_ACCESS;

    const decoded = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
      issuer: env.JWT_ISSUER,
      audience: env.JWT_AUDIENCE,
    }) as JwtPayload;

    return decoded;
  } catch (error) {
    throw new Error(`Failed to verify refresh token: ${error.message}`);
  }
};

export const generateTokenPair = (payload: JwtPayload) => {
  return {
    accessToken: generateAccesToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
};
