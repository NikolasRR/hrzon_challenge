import { Request, Response } from "express";
import { WaveCreationData } from "../types/types.js";
import wavesServices from "../services/wavesServices.js";

async function createWave(req: Request, res: Response) {
  const waveData: WaveCreationData = req.body;
  await wavesServices.createOne(waveData);

  res.sendStatus(201);
}

const controllers = {
  createWave
}

export default controllers;