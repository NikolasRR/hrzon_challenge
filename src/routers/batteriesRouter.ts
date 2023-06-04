import { Router } from "express";
import controllers from "../controllers/batteriesControllers.js";
import middleware from "../middlewares/batteriesMiddleware.js";

const batteriesRouter = Router();
batteriesRouter
  .post('/batteries', middleware.verifyBatteryData, controllers.createBattery)
  .get('/batteries/winner/:id', middleware.verifyBatteryId, controllers.getWinnerOfBattery)

export default batteriesRouter;