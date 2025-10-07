import jwt from "jsonwebtoken";
import env from "../env.js";
export const generateAccesToken = (payload) => {
    const privateKey = env.PRIVATE_KEY_ACCESS;
    const options = {
        algorithm: "RS256",
        expiresIn: env.JWT_ACCESS_EXPIRES_IN,
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE,
    };
    return jwt.sign(payload, privateKey, options);
};
export const generateRefreshToken = (payload) => {
    const privateKey = env.PRIVATE_KEY_REFRESH;
    const options = {
        algorithm: "RS256",
        expiresIn: env.JWT_REFRESH_EXPIRES_IN,
        issuer: env.JWT_ISSUER,
        audience: env.JWT_AUDIENCE,
    };
    return jwt.sign(payload, privateKey, options);
};
export const verifyAccesToken = (token) => {
    try {
        const publicKey = env.PUBLIC_KEY_ACCESS;
        const decoded = jwt.verify(token, publicKey, {
            algorithms: ["RS256"],
            issuer: env.JWT_ISSUER,
            audience: env.JWT_AUDIENCE,
        });
        return decoded;
    }
    catch (error) {
        throw new Error(`Failed to verify refresh token: ${error.message}`);
    }
};
export const generateTokenPair = (payload) => {
    return {
        accessToken: generateAccesToken(payload),
        refreshToken: generateRefreshToken(payload),
    };
};
//# sourceMappingURL=jwt.utils.js.map