import connection from "../database/db.js";

async function create(batteryId: number, surferNumber: number) {
  await connection.query(`
    INSERT INTO waves (battery, surfer)
    VALUES ($1, $2)
  `, [batteryId, surferNumber])
}

const wavesRepo = {
  create
}

export default wavesRepo;