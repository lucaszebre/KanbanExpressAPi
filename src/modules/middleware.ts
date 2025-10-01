import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

type AuthenticatedRequest = Request & {
  user?: { id: string; name: string; email: string };
};

export const handleInputErrors = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    next();
  }
};
