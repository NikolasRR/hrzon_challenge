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

async function getByCountry(country: string) {
  return await surfersRepo.get(country);
}

const surfersServices = {
  createOne,
  editByNumber,
  getByCountry
}

export default surfersServices;