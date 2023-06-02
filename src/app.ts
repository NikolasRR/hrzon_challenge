import express, { json } from "express";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import cors from "cors";
import "express-async-errors";

// import router from "./routers/index.js";
// import errorHandler from "./errors/errorHandler.js";

const env = dotenv.config();
dotenvExpand.expand(env);

const app = express()
    .set('trust proxy', true)
    .use(cors())
    .use(json())
    // .use(router)
    // .use(errorHandler);

export default app;