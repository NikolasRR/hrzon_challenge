import connection from "../database/db.js";
import { Wave } from "../types/types.js"

async function create(batteryId: number, surferNumber: number): Promise < Wave > {
  const result = await connection.query(`
    INSERT INTO waves (battery, surfer)
    VALUES ($1, $2)
    RETURNING *
  `, [batteryId, surferNumber])

  return result.rows[0]
}

const wavesRepo = {
  create
}

export default wavesRepo;