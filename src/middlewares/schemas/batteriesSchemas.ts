import Joi from "joi";
import { BatteryCreationData } from "../../types/types.js";

export const createBatterySchema = Joi.object<BatteryCreationData>({
  surferOne: Joi.number().required(),
  surferTwo: Joi.number().required()
})