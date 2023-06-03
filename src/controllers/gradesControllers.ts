import { Request, Response } from "express";
import gradesServices from "../services/gradesServices.js";

async function createGrade(req: Request, res: Response) {
  const waveId = req.body.wave;
  await gradesServices.createOne(waveId);

  res.sendStatus(201);
}

const controllers = {
  createGrade
}

export default controllers;