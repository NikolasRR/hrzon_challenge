import { NextFunction, Request, Response } from "express";
import { createBatterySchema } from "./schemas/batteriesSchemas.js";

async function verifyBatteryData(req: Request, res: Response, next: NextFunction) {
  const validation = createBatterySchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw {
    type: "schema",
    message: validation.error.details.map(detail => detail.message).join(", ")
  };

  next();
}

async function verifyBatteryId(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) throw { type: "bad request", message: "invalid battery id" }

  next();
}

const middleware = {
  verifyBatteryData,
  verifyBatteryId
}

export default middleware;