"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var column_1 = require("./handlers/column");
var tasks_1 = require("./handlers/tasks");
var boards_1 = require("./handlers/boards");
var subtask_1 = require("./handlers/subtask");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var router = (0, express_1.Router)();
// Boards
router.post('/boards', boards_1.createboard);
router.put('/boards/:id', boards_1.updateboard);
router["delete"]('/boards/:boardId', boards_1.deleteboard);
router.get('/boards/:boardId', boards_1.getOneBoard);
router.get('/boards', boards_1.getBoards);
// Columns
router.post('/boards/:boardId/columns', column_1.createColumns);
router.get('/columns/:id', column_1.getColumn);
router.put('/columns/:id', column_1.updateColumn);
router["delete"]('/columns/:id', column_1.deleteColumn);
router.post('/columns/:id/tasks', column_1.addTaskColumn);
// Tasks
router.put('/tasks/:id', tasks_1.updateTaskSubtask);
router["delete"]('/tasks/:id', tasks_1.deleteTask);
router.get('/tasks/:id', tasks_1.getTask);
router.put('/tasks/:id/column/:columnId', tasks_1.moveTaskToColumn);
// Subtasks
router.put('/subtask/:id', subtask_1.updateSubTask);
router.put('/verify', function (req, res) {
    var authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);
    jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET, function (err, user) {
        if (err)
            return res.sendStatus(403);
        return res.status(200).json({ valid: true, user: user });
    });
});
exports["default"] = router;
//# sourceMappingURL=router.js.map