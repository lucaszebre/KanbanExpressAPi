// @ts-nocheck
import { getSession } from "@auth/express"
import { authConfig } from "../config/auth.config.js"
import type { NextFunction, Request, Response } from "express"
import prisma from "../db.js"

export async function authenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session =
    res.locals.session ?? (await getSession(req, authConfig)) ?? undefined

  res.locals.session = session

  console.log(session,"session")

  const existingUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!existingUser) {
    const user = await prisma.user.create({
        data: {
          email: session.user.email,
          name:session.user.name,
          profilePicture:session.user.image,
        }
      })
  }




  if (session) {
    return next()
  }

  res.status(401).json({ message: "Not Authenticated" })
}

export async function currentSession(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const session = (await getSession(req, authConfig)) ?? undefined
  res.locals.session = session
  return next()
}