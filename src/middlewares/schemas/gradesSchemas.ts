import Joi from "joi";
import { GradeCreationData } from "../../types/types.js";

export const createGradeSchema = Joi.object<GradeCreationData>({
  wave: Joi.number().integer().required(),
  parcial_one: Joi.number().integer().min(0).max(100).required(),
  parcial_two: Joi.number().integer().min(0).max(100).required(),
  parcial_three: Joi.number().integer().min(0).max(100).required()
})