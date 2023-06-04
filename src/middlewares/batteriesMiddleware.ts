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

const middleware = {
  verifyBatteryData
}

export default middleware;