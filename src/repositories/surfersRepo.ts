import connection from "../database/db.js";
import { Surfer } from "../types/types.js";

async function create(number: number, name: string, country: string) {
  await connection.query(`
    INSERT INTO surfers (number, name, country)
    VALUES ($1, $2, $3)
  `, [number, name, country])
}

async function edit(number: number, name: string, country: string) {
  await connection.query(`
    UPDATE surfers
    SET name = coalesce($1, name), country = coalesce($2, country)
    WHERE number = $3
  `, [name, country, number])
}

async function removeByNumber(number: number) {
  await connection.query(`
    DELETE FROM surfers WHERE number = $1
  `, [number])
}

async function getManyByCountry(country: string): Promise<Surfer[]> {
  const result = await connection.query(`
    SELECT * FROM surfers WHERE country = coalesce($1, country)
  `, [country])

  return result.rows
}

async function getByNumber(number: number): Promise<Surfer> {
  const result = await connection.query(`
    SELECT * FROM surfers WHERE number = $1
 `, [number])

  return result.rows[0];
}

const surfersRepo = {
  create,
  edit,
  removeByNumber,
  getManyByCountry,
  getByNumber
}

export default surfersRepo;