const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "auth_tasks_db",
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

module.exports = pool;
