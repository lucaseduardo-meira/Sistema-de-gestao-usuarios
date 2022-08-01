const dotenv = require("dotenv");

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "crudproject",
  password: process.env.PASSWORD,
  database: "crudsql",
  define: {
    timestamps: true,
    underscored: true,
  },
};
