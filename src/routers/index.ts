import { Router } from "express";
import surfersRouter from "./surfersRouter.js";
import batteriesRouter from "./batteriesRouter.js";
import wavesRouter from "./wavesRouter.js";
import gradesRouter from "./gradesRouter.js";

const router = Router();
router
  .use(surfersRouter)
  .use(batteriesRouter)
  .use(wavesRouter)
  .use(gradesRouter);

export default router;