import connection from "../database/db.js";
import { Battery, BatteryWithGrades } from "../types/types.js";

async function create(numberOfSurferOne: number, numberOfSurferTwo: number) {
  await connection.query(`
    INSERT INTO batteries (surfer_one, surfer_two)
    VALUES ($1, $2)
  `, [numberOfSurferOne, numberOfSurferTwo])
}

async function getByIdAndSurferNumber(id: number, surferNumber: number): Promise<Battery[]> {
  const result = await connection.query(`
    SELECT * FROM batteries
    WHERE id = $1 AND (surfer_one = $2 OR surfer_two = $2)
  `, [id, surferNumber])

  return result.rows;
}

async function getByIdWithWavesAndGrades(id: number): Promise<BatteryWithGrades> {
  const result = await connection.query(`
    SELECT b.id, 
    json_build_object(
        'id', b.surfer_one,
        'grades', (
          SELECT array_agg(
            json_build_object(
              'waveId', w.id,
              'gradeId', g.id,
              'avarage', ((g.parcial_one + g.parcial_two + g.parcial_three) / 3)
            )
          ) 
          FROM waves w 
          JOIN grades g ON w.id = g.wave 
          WHERE w.surfer = b.surfer_one
        )
      ) AS "surferOne",
      json_build_object(
        'id', b.surfer_two,
        'grades', (
          SELECT array_agg(
            json_build_object(
            'waveId', w.id,
            'gradeId', g.id,
            'avarage', ((g.parcial_one + g.parcial_two + g.parcial_three) / 3)
            )
          ) 
          FROM waves w 
          JOIN grades g ON w.id = g.wave 
          WHERE w.surfer = b.surfer_two
        )
      ) AS "surferTwo"
    FROM batteries b 
    WHERE b.id = $1
  `, [id])

  return result.rows[0];
}

const batteriesRepo = {
  create,
  getByIdAndSurferNumber,
  getByIdWithWavesAndGrades
}

export default batteriesRepo;