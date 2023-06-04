import Joi from "joi";
import { BatteryCreationData } from "../../types/types.js";

export const createBatterySchema = Joi.object<BatteryCreationData>({
  surferOne: Joi.number().integer().required(),
  surferTwo: Joi.number().integer().required()
})

export const getBatteryWinnerSchema = Joi.object({
  id: Joi.number().integer().required()
})