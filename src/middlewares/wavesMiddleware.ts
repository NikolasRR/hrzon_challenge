import { NextFunction, Request, Response } from "express";
import { waveCreationSchema } from "./schemas/wavesSchemas.js";

async function verifyWaveData(req: Request, res: Response, next: NextFunction) {
  const validation = waveCreationSchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw {
    type: "schema",
    message: validation.error.details.map(detail => detail.message).join(", ")
  };

  next();
}

const middleware = {
  verifyWaveData
}

export default middleware;