import { NextFunction, Request, Response } from "express";
import { createSurferSchema, editSurferSchema, listingSurfersByCountry } from "./schemas/surfersSchemas.js";

async function verifySurferData(req: Request, res: Response, next: NextFunction) {
  const validation = createSurferSchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw { 
    type: "schema", 
    message: (validation.error.details.map(detail => detail.message)).join(", ")
  };

  next();
}

async function verifySurferNewData(req: Request, res: Response, next: NextFunction) {
  const validation = editSurferSchema.validate(req.body, { abortEarly: false });
  if (validation.error) throw { 
    type: "schema", 
    message: validation.error.details.map(detail => detail.message).join(", ")
  };

  next();
}

async function verifySurfersCountryValue(req: Request, res: Response, next: NextFunction) {
  const validation = listingSurfersByCountry.validate(req.body, { abortEarly: false });
  if (validation.error) throw { 
    type: "schema", 
    message: validation.error.details.map(detail => detail.message).join(", ")
  };

  next();
}

const middleware = {
  verifySurferData,
  verifySurferNewData,
  verifySurfersCountryValue
}

export default middleware;