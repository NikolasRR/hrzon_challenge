import connection from "../database/db.js";

async function create(number: number, name: string, country: string) {
  await connection.query(`
    INSERT into surfers (number, name, country)
    VALUES ($1, $2, $3)
  `, [number, name, country])
}

async function edit(number: number, name: string, country: string) {
  console.log('começou');
  
  await connection.query(`
    UPDATE surfers
    SET name = coalesce($1, name), country = coalesce($2, country)
    WHERE number = $3
  `, [name, country, number])
  console.log("query terminou");
  
}

const surfersRepo = {
  create,
  edit
}

export default surfersRepo;