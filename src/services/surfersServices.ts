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

async function removeByNumber(number: number) {
  const surfer = await surfersRepo.getByNumber(number);
  if (!surfer) throw { type: "not found", message: "surfer not registered" }

  await surfersRepo.removeByNumber(number);
}

async function getByCountry(country: string) {
  return await surfersRepo.getManyByCountry(country === "" ? null : country?.toUpperCase());
}

const surfersServices = {
  createOne,
  editByNumber,
  removeByNumber,
  getByCountry
}

export default surfersServices;