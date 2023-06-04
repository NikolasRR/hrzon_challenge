import { Request, Response } from "express";
import { WaveCreationData } from "../types/types.js";
import wavesServices from "../services/wavesServices.js";

async function createWave(req: Request, res: Response) {
  const waveData: WaveCreationData = req.body;
  const wave = await wavesServices.createOne(waveData);

  res.status(201).send(wave);
}

const controllers = {
  createWave
}

export default controllers;