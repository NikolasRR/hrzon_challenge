import Joi from "joi";

export const createGradeSchema = Joi.object({
  wave: Joi.number().required()
})