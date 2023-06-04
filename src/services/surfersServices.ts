import surfersRepo from "../repositories/surfersRepo.js";
import { Surfer } from "../types/types.js";

async function createOne(surfer: Surfer) {
  await surfersRepo.create(
    surfer.number,
    surfer.name.toUpperCase(),
    surfer.country.toUpperCase()
  );
}

async function editByNumber(surfer: Surfer) {
  const surferOnDB = await surfersRepo.getByNumber(surfer.number);
  if (!surferOnDB) throw { type: "not found", message: "surfer not registered" }

  await surfersRepo.edit(
    surfer.number,
    surfer.name?.toUpperCase(),
    surfer.country?.toUpperCase()
  );
}

async function getByCountry(country: string) {
  return await surfersRepo.getManyByCountry(country?.toUpperCase());
}

const surfersServices = {
  createOne,
  editByNumber,
  getByCountry
}

export default surfersServices;