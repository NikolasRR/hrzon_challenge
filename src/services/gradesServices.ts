import gradesRepo from "../repositories/gradesRepo.js";
import wavesRepo from "../repositories/wavesRepo.js";
import { GradeCreationData } from "../types/types.js";

async function createOne(grade: GradeCreationData) {
  const wave = await wavesRepo.getById(grade.wave);
  if (!wave) throw { type: "not found", message: "wave not registered" }

  await gradesRepo.create(grade.wave, grade.parcial_one, grade.parcial_two, grade.parcial_three);
}

const gradesServices = {
  createOne
}

export default gradesServices;