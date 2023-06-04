import { Request, Response } from "express";
import { BatteryCreationData } from "../types/types.js";
import batteriesServices from "../services/batteriesServices.js";

async function createBattery(req: Request, res: Response) {
  const batteryData: BatteryCreationData = req.body;
  await batteriesServices.createOne(batteryData);

  res.sendStatus(201);
}

async function getWinnerOfBattery(req: Request, res: Response) {
  const batteryId: number = parseInt(req.params.id);
  const result = await batteriesServices.getWinnerOfOne(batteryId);

  res.send(result);
}

const controllers = {
  createBattery,
  getWinnerOfBattery
}

export default controllers;