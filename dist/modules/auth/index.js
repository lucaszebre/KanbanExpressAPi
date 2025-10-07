import bcrypt from "bcrypt";
import { verifyAccesToken } from "../../utils/jwt.utils.js";
export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
};
export const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
};
export const protect = (req, res, next) => {
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
    }
    catch (e) {
        res.status(500).json({ message: "server error" });
        return;
    }
};
//# sourceMappingURL=index.js.map