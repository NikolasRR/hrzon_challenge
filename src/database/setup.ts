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
    surfer_one INTEGER NOT NULL REFERENCES surfers(number),
    surfer_two INTEGER NOT NULL REFERENCES surfers(number)
  )`, [])

  await client.query(`CREATE TABLE waves (
    id SERIAL PRIMARY KEY,
    battery INTEGER NOT NULL REFERENCES batteries(id),
    surfer INTEGER NOT NULL REFERENCES surfers(number)
  )`, [])

  await client.query(`CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    wave INTEGER NOT NULL REFERENCES waves(id),
    parcial_one INTEGER,
    parcial_two INTEGER,
    parcial_three INTEGER
  )`, [])

  await client.end();
}

CreateTables();