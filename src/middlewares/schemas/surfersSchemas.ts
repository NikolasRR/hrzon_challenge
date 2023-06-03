import Joi from "joi";
import { Surfer } from "../../types/types.js";

export const createSurferSchema = Joi.object<Surfer>({
  number: Joi.number().required(),
  name: Joi.string().required(),
  country: Joi.string().required()
});