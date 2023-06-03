import { Request, Response } from "express";
import gradesServices from "../services/gradesServices.js";
import { GradeCreationData } from "../types/types.js";

async function createGrade(req: Request, res: Response) {
  const gradeData: GradeCreationData = req.body;
  await gradesServices.createOne(gradeData);

  res.sendStatus(201);
}

const controllers = {
  createGrade
}

export default controllers;