import batteriesRepo from "../repositories/batteriesRepo.js";
import surfersRepo from "../repositories/surfersRepo.js";
import { BatteryCreationData, GradeAvarage } from "../types/types.js";

async function createOne(batteryData: BatteryCreationData) {
  const surferOne = await surfersRepo.getByNumber(batteryData.surferOne);
  const surferTwo = await surfersRepo.getByNumber(batteryData.surferTwo);

  if (!surferOne || !surferTwo) throw { type: "not found", message: "one or both surfers not registered" }

  return await batteriesRepo.create(batteryData.surferOne, batteryData.surferTwo);
}

async function getWinnerOfOne(id: number) {
  const batteryRunDown = await batteriesRepo.getByIdWithWavesAndGrades(id);
  const result = { 
    batteryId: batteryRunDown.id, 
    winner: 'tie'
  }

  const surferOneGrade = twoBiggestGradesSum(batteryRunDown.surferOne.grades);
  const surferTwoGrade = twoBiggestGradesSum(batteryRunDown.surferTwo.grades);

  if (surferOneGrade > surferTwoGrade) result.winner = (await surfersRepo.getByNumber(batteryRunDown.surferOne.id)).name;
  if (surferOneGrade < surferTwoGrade) result.winner = (await surfersRepo.getByNumber(batteryRunDown.surferTwo.id)).name;
  
  return result;
}

function twoBiggestGradesSum(grades: GradeAvarage[]) {
  const avareges = grades.map(grade => grade.avarage);
  let first = 0, second = 0;
  
  for (let i = 0; i < avareges.length; i++) {
    if (avareges[i] > first) {
      second = first;
      first = avareges[i];
    }
    else if (avareges[i] > second && avareges[i] != first) {
      second = avareges[i];
    }
  }

  return first + second;
}

const batteriesServices = {
  createOne,
  getWinnerOfOne
}

export default batteriesServices;