import Joi from "joi";
import { WaveCreationData } from "../../types/types.js";

export const waveCreationSchema = Joi.object<WaveCreationData>({
  battery: Joi.number().required(),
  surfer: Joi.number().required()
})