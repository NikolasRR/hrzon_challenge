import connection from "../database/db.js";

async function create(waveId: number) {
  await connection.query(`
    INSERT INTO grades (wave)
    VALUES ($1)
  `, [waveId])
}

const gradesRepo = {
  create
}

export default gradesRepo;