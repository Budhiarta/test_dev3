const Sequelize = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "6XvXDZ35gu0nvG0VRNiQ",
  DB_HOST = "containers-us-west-175.railway.app",
  DB_NAME = "railway",
  DB_PORT = "7288",
  DB_URL = "postgresql://postgres:6XvXDZ35gu0nvG0VRNiQ@containers-us-west-175.railway.app:7288/railway"
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
