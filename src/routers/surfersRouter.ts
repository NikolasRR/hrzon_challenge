import { Router } from "express";
import controllers from "../controllers/surfersControllers.js";
import middleware from "../middlewares/surfersMiddleware.js";

const surfersRouter = Router();

surfersRouter
  .post('/surfers', middleware.verifySurferData, controllers.createSurfer)
  .put('/surfers', middleware.verifySurferNewData, controllers.editSurfer)
  .get('/surfers', middleware.verifySurfersCountryValue, controllers.getSurfersByCountry)
  .delete('/surfers/:number', controllers.removeSurfer);

export default surfersRouter;