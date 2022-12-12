const Sequelize = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "BsP0JunkZgu0Ll0D3ceV",
  DB_HOST = "containers-us-west-169.railway.app",
  DB_NAME = "railway",
  DB_PORT = "6964",
  DB_URL = "postgresql://postgres:BsP0JunkZgu0Ll0D3ceV@containers-us-west-169.railway.app:6964/railway"
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
