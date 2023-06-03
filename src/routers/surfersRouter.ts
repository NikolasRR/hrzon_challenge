import { Router } from "express";
import controllers from "../controllers/surfersControllers.js";
import middleware from "../middlewares/surfersMiddleware.js";

const surfersRouter = Router();

surfersRouter.post('/surfer', middleware.verifySurferData, controllers.createSurfer)

export default surfersRouter;