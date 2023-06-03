import batteriesRepo from "../repositories/batteriesRepo.js";
import { BatteryCreationData } from "../types/types.js";

//TODO: verify if the provided surfers numbers are registered
async function createOne(batteryData: BatteryCreationData) {
  await batteriesRepo.create(batteryData.surferOne, batteryData.surferTwo);
}

const batteriesServices = {
  createOne
}

export default batteriesServices;