import gradesRepo from "../repositories/gradesRepo.js";

async function createOne(waveId: number) {
  await gradesRepo.create(waveId);
}

const gradesServices = {
  createOne
}

export default gradesServices;