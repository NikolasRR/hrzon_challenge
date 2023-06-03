import pg from "pg";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const env = dotenv.config();
dotenvExpand.expand(env);

const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },

});

export default connection;