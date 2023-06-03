import surfersRepo from "../repositories/surfersRepo.js";
import { Surfer } from "../types/types.js";

async function createOne(surfer: Surfer) {
  await surfersRepo.create(
    surfer.number,
    surfer.name,
    surfer.country
  );
}

const surfersServices = {
  createOne
}

export default surfersServices;