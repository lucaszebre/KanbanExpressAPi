"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubtask = exports.updateSubTask = exports.createSubTask = exports.getSubTask = void 0;
const db_1 = __importDefault(require("../db"));
const getSubTask = async (req, res) => {
    try {
        const subtask = await db_1.default.subtask.findUnique({
            where: { id: req.params.id }
        });
        if (!subtask) {
            return res.status(404).json({ error: 'Subtask not found' });
        }
        res.json(subtask);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getSubTask = getSubTask;
const createSubTask = async (req, res) => {
    try {
        const newSubtask = await db_1.default.subtask.create({
            data: req.body
        });
        res.json(newSubtask);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createSubTask = createSubTask;
const updateSubTask = async (req, res) => {
    try {
        const updatedSubtask = await db_1.default.subtask.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.json(updatedSubtask);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateSubTask = updateSubTask;
const deleteSubtask = async (req, res) => {
    try {
        await db_1.default.subtask.delete({
            where: { id: req.params.id }
        });
        res.status(204).end();
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteSubtask = deleteSubtask;
//# sourceMappingURL=subtask.js.map