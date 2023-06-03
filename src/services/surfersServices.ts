import surfersRepo from "../repositories/surfersRepo.js";
import { Surfer } from "../types/types.js";

async function createOne(surfer: Surfer) {
  await surfersRepo.create(
    surfer.number,
    surfer.name,
    surfer.country
  );
}

async function editByNumber(surfer: Surfer) {
  await surfersRepo.edit(
    surfer.number,
    surfer.name,
    surfer.country
  );
}

const surfersServices = {
  createOne,
  editByNumber
}

export default surfersServices;