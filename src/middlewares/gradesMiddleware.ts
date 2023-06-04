import { NextFunction, Request, Response } from "express";
import { createGradeSchema } from "./schemas/gradesSchemas.js";

async function verifyGradeData(req: Request, res: Response, next: NextFunction) {
  const validation = createGradeSchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw {
    type: "schema",
    message: validation.error.details.map(detail => detail.message).join(", ")
  };

  next();
}

const middleware = {
  verifyGradeData,
}

export default middleware;