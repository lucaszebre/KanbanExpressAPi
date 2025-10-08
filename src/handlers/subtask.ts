import { Context } from "hono";
import prismaClients from "../lib/prismaClient.js";
import {
  CreateSubtaskSchema,
  HonoContext,
  UpdateSubtaskBodySchema,
} from "../types/index.js";

export const getSubTask = async (c: Context<HonoContext>) => {
  try {
    const subtaskId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    const subtask = await prisma.subtask.findUnique({
      where: { id: subtaskId },
    });

    if (!subtask) {
      return c.json({ error: "Subtask not found" }, 404);
    }

    return c.json(subtask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const createSubTask = async (c: Context<HonoContext>) => {
  try {
    const body = await c.req.json();
    const validation = CreateSubtaskSchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const newSubtask = await prisma.subtask.create({
      data: validation.data,
    });

    return c.json(newSubtask, 201);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const updateSubTask = async (c: Context<HonoContext>) => {
  try {
    const subtaskId = c.req.param("id");
    const body = await c.req.json();

    const validation = UpdateSubtaskBodySchema.safeParse(body);

    if (!validation.success) {
      return c.json({ error: validation.error.issues }, 400);
    }

    const prisma = await prismaClients.fetch(c.env.DB);

    const updatedSubtask = await prisma.subtask.update({
      where: { id: subtaskId },
      data: validation.data,
    });

    return c.json(updatedSubtask);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};

export const deleteSubtask = async (c: Context<HonoContext>) => {
  try {
    const subtaskId = c.req.param("id");
    const prisma = await prismaClients.fetch(c.env.DB);

    await prisma.subtask.delete({
      where: { id: subtaskId },
    });

    return c.body(null, 204);
  } catch (error) {
    console.error(error);
    return c.json({ error: "server error" }, 500);
  }
};
