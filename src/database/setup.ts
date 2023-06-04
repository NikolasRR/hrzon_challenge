import pg from "pg";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

async function CreateTables() {
  const client = new pg.Client({
    connectionString: process.env.DATABASE_URL
  });
  await client.connect();

  await client.query(`CREATE TABLE surfers (
    number INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    country TEXT NOT NULL
  )`, [])

  await client.query(`CREATE TABLE batteries (
    id SERIAL PRIMARY KEY,
    surfer_one INTEGER NOT NULL REFERENCES surfers(number) ON DELETE CASCADE,
    surfer_two INTEGER NOT NULL REFERENCES surfers(number) ON DELETE CASCADE
  )`, [])

  await client.query(`CREATE TABLE waves (
    id SERIAL PRIMARY KEY,
    battery INTEGER NOT NULL REFERENCES batteries(id) ON DELETE CASCADE,
    surfer INTEGER NOT NULL REFERENCES surfers(number) ON DELETE CASCADE
  )`, [])

  await client.query(`CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    wave INTEGER NOT NULL REFERENCES waves(id) ON DELETE CASCADE,
    parcial_one INTEGER NOT NULL,
    parcial_two INTEGER NOT NULL,
    parcial_three INTEGER NOT NULL
  )`, [])

  await client.end();
}

CreateTables();