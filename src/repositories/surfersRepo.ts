import connection from "../database/db.js";

async function create(number: number, name: string, country: string) {
  await connection.query(`
    INSERT into surfers (number, name, country)
    VALUES ($1, $2, $3)
  `, [number, name, country])
}

const surfersRepo = {
  create
}

export default surfersRepo;