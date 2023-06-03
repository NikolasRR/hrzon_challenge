import { Request, Response } from "express";
import surfersServices from "../services/surfersServices.js";

async function createSurfer(req: Request, res: Response) {
  const surfer =  req.body;
  await surfersServices.createOne(surfer);

  res.sendStatus(201);
}

const controllers = {
  createSurfer
}

export default controllers;