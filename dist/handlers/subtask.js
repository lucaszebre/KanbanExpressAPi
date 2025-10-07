import prisma from "../db.js";
import { CreateSubtaskSchema, UpdateSubtaskBodySchema, } from "../types/index.js";
export const getSubTask = async (req, res) => {
    try {
        const subtask = await prisma.subtask.findUnique({
            where: { id: req.params.id },
        });
        if (!subtask) {
            return res.status(404).json({ error: "Subtask not found" });
        }
        return res.status(200).json(subtask);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const createSubTask = async (req, res) => {
    try {
        const validation = CreateSubtaskSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: validation.error.issues });
        }
        const newSubtask = await prisma.subtask.create({
            data: validation.data,
        });
        return res.status(201).json(newSubtask);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const updateSubTask = async (req, res) => {
    try {
        const validation = UpdateSubtaskBodySchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: validation.error.issues });
        }
        const updatedSubtask = await prisma.subtask.update({
            where: { id: req.params.id },
            data: validation.data,
        });
        return res.status(200).json(updatedSubtask);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const deleteSubtask = async (req, res) => {
    try {
        await prisma.subtask.delete({
            where: { id: req.params.id },
        });
        return res.status(204).end();
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
//# sourceMappingURL=subtask.js.map