"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./modules/auth");
const user_1 = require("./handlers/user");
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Public routes
app.post('/register', user_1.createNewUser);
app.post('/login', user_1.signin);
// Protected routes
app.use('/api', auth_1.protect, router_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: `Internal server error: ${err.message}` });
});
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});
exports.default = app;
//# sourceMappingURL=server.js.map