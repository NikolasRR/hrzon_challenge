import { Router } from "express";
import controllers from "../controllers/wavesControllers.js";
import middleware from "../middlewares/wavesMiddleware.js";

const wavesRouter = Router();
wavesRouter
  .post('/waves', middleware.verifyWaveData, controllers.createWave)

export default wavesRouter;