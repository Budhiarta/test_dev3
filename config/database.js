const Sequelize = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "DMk8WkJ53eWyJ8MlZwMj",
  DB_HOST = "containers-us-west-164.railway.app",
  DB_NAME = "railway",
  DB_PORT = "6419",
  DB_URL = "postgresql://postgres:DMk8WkJ53eWyJ8MlZwMj@containers-us-west-164.railway.app:6419/railway"
} = process.env;

const db = new Sequelize(DB_URL, {
  define: {
    timestamps: false
  }
})


module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  db
};
