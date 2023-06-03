import { NextFunction, Request, Response } from "express";
import { createSurferSchema } from "./schemas/surfersSchemas.js";

async function verifySurferData(req: Request, res: Response, next: NextFunction) {
  const validation = createSurferSchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw { 
    type: "schema", 
    message: validation.error.details.map(detail => detail.message)
  };

  next();
}

const middleware = {
  verifySurferData
}

export default middleware;