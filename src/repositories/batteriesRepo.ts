import connection from "../database/db.js";

async function create(numberOfSurferOne: number, numberOfSurferTwo: number) {
  await connection.query(`
    INSERT INTO batteries (surfer_one, surfer_two)
    VALUES ($1, $2)
  `, [numberOfSurferOne, numberOfSurferTwo])
}

const batteriesRepo = {
  create
}

export default batteriesRepo;