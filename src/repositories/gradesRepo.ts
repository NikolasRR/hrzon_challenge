import connection from "../database/db.js";

async function create(waveId: number, parcialOne: number, parcialTwo: number, parcialThree: number) {
  await connection.query(`
    INSERT INTO grades (wave, parcial_one, parcial_two, parcial_three)
    VALUES ($1, $2, $3, $4)
  `, [waveId, parcialOne, parcialTwo, parcialThree])
}

const gradesRepo = {
  create
}

export default gradesRepo;