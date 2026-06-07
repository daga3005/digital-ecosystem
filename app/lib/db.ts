
import pg from "pg";

const { Pool } = pg;



export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log(`Conneted to postgres`);
});
pool.on("error", (e) => {
  console.log(`Error at connection to postgres, ${e}`);
});
