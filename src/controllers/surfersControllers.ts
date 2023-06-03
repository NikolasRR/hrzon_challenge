import { Request, Response } from "express";
import surfersServices from "../services/surfersServices.js";

async function createSurfer(req: Request, res: Response) {
  const surfer =  req.body;
  await surfersServices.createOne(surfer);

  res.sendStatus(201);
}

async function editSurfer(req: Request, res: Response) {
  const surfer =  req.body;
  await surfersServices.editByNumber(surfer);

  res.sendStatus(200);
}

const controllers = {
  createSurfer,
  editSurfer
}

export default controllers;