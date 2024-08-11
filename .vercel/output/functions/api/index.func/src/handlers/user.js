"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.createNewUser = void 0;
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../modules/auth");
const createNewUser = async (req, res) => {
    try {
        const existingUser = await db_1.default.user.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (existingUser) {
            return res.status(404).json({ error: 'Email already in use' });
        }
        const user = await db_1.default.user.create({
            data: {
                email: req.body.email,
                password: await (0, auth_1.hashPassword)(req.body.password),
                name: req.body.name,
            }
        });
        const token = await (0, auth_1.createJWT)(user);
        return res.status(200).json({ token });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
};
exports.createNewUser = createNewUser;
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await db_1.default.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isValid = await (0, auth_1.comparePasswords)(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = (0, auth_1.createJWT)(user);
        return res.status(200).json({ token });
    }
    catch (error) {
        console.error('Signin error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.signin = signin;
//# sourceMappingURL=user.js.map