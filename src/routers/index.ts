import { Router } from "express";
import surfersRouter from "./surfersRouter.js";
import batteriesRouter from "./batteriesRouter.js";

const router = Router();
router
  .use(surfersRouter)
  .use(batteriesRouter)

export default router;