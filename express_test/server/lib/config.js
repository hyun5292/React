require("dotenv").config();

module.exports = {
  user: {
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    port: process.env.DB_port,
    database: process.env.DB_database,
  },
};
