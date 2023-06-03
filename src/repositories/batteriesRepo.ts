import connection from "../database/db.js";
import { Battery } from "../types/types.js";

async function create(numberOfSurferOne: number, numberOfSurferTwo: number) {
  await connection.query(`
    INSERT INTO batteries (surfer_one, surfer_two)
    VALUES ($1, $2)
  `, [numberOfSurferOne, numberOfSurferTwo])
}

async function getByIdAndSurferNumber(id: number, surferNumber: number): Promise<Battery[]> {
  const result = await connection.query(`
    SELECT * FROM batteries
    WHERE id = $1 AND (surfer_one = $2 OR surfer_two = $2)
  `, [id, surferNumber])

  return result.rows;
}

const batteriesRepo = {
  create,
  getByIdAndSurferNumber
}

export default batteriesRepo;