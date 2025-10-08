import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "../prisma/client/edge.js";

export const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};
