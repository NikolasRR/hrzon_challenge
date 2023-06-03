import { Router } from "express";
import middleware from "../middlewares/gradesMiddleware.js";
import controllers from "../controllers/gradesControllers.js";

const gradesRouter = Router();
gradesRouter
  .post('/grades', middleware.verifyGradeData, controllers.createGrade);

export default gradesRouter;