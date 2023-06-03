import gradesRepo from "../repositories/gradesRepo.js";
import { GradeCreationData } from "../types/types.js";

async function createOne(grade: GradeCreationData) {
  await gradesRepo.create(grade.wave, grade.parcial_one, grade.parcial_two, grade.parcial_three);
}

const gradesServices = {
  createOne
}

export default gradesServices;