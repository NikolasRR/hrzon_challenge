import { Request, Response } from "express";
import { BatteryCreationData } from "../types/types.js";
import batteriesServices from "../services/batteriesServices.js";

async function createBattery(req: Request, res: Response) {
  const batteryData: BatteryCreationData = req.body;
  await batteriesServices.createOne(batteryData);

  res.sendStatus(201);
}

const controllers = {
  createBattery
}

export default controllers;