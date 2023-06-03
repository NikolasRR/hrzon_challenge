import { Request, Response } from "express";
import surfersServices from "../services/surfersServices.js";
import { Surfer } from "../types/types.js";

async function createSurfer(req: Request, res: Response) {
  const surfer: Surfer = req.body;
  await surfersServices.createOne(surfer);

  res.sendStatus(201);
}

async function editSurfer(req: Request, res: Response) {
  const surfer: Surfer = req.body;
  await surfersServices.editByNumber(surfer);

  res.sendStatus(200);
}

async function getSurfersByCountry(req: Request, res: Response) {
  const country: string = req.body.country;
  const surfers = await surfersServices.getByCountry(country);

  res.send(surfers);
}

const controllers = {
  createSurfer,
  editSurfer,
  getSurfersByCountry
}

export default controllers;