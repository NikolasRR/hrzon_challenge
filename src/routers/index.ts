import { Router } from "express";
import surfersRouter from "./surfersRouter.js";

const router = Router();
router.use(surfersRouter)

export default router;