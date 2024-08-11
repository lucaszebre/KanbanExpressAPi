"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteColumn = exports.updateColumn = exports.getColumn = exports.addTaskColumn = exports.createColumns = void 0;
const db_1 = __importDefault(require("../db"));
const createColumns = async (req, res) => {
    try {
        // Validate that necessary data is provided
        const { name } = req.body;
        if (!name || !req.params.boardId) {
            return res.status(400).json({ error: 'Name and boardId are required' });
        }
        // Create new column
        const newColumn = await db_1.default.column.create({
            data: {
                name,
                boardId: req.params.boardId,
            },
        });
        // Respond with the created column
        res.status(201).json(newColumn);
    }
    catch (error) {
        // Handle error
        console.error('Error creating column: ', error);
        res.status(500).send(error.message);
    }
};
exports.createColumns = createColumns;
const addTaskColumn = async (req, res) => {
    const { id } = req.params;
    const { subtasks, ...newTask } = req.body;
    try {
        // Check if column exists
        const column = await db_1.default.column.findUnique({ where: { id } });
        if (!column) {
            return res.status(404).send('Column not found');
        }
        // If column exists, create task along with subtasks
        const createdTask = await db_1.default.task.create({
            data: {
                ...newTask,
                column: {
                    connect: { id },
                },
                subtasks: {
                    create: subtasks.map(title => ({ title })),
                },
            },
        });
        res.status(201).json(createdTask);
    }
    catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send(error.message);
    }
};
exports.addTaskColumn = addTaskColumn;
const getColumn = async (req, res) => {
    const { id } = req.params;
    try {
        const column = await db_1.default.column.findUnique({
            where: { id },
            include: {
                tasks: {
                    include: {
                        subtasks: true,
                    },
                },
            },
        });
        if (!column) {
            return res.status(401).send('Column not found');
        }
        res.json(column);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getColumn = getColumn;
const updateColumn = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedColumn = await db_1.default.column.update({
            where: { id },
            data: req.body,
        });
        res.json(updatedColumn);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.updateColumn = updateColumn;
const deleteColumn = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedColumn = await db_1.default.column.delete({
            where: { id },
        });
        res.json(deletedColumn);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteColumn = deleteColumn;
//# sourceMappingURL=column.js.map