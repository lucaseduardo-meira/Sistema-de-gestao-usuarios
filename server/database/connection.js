const dotenv = require("dotenv");

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "crudsql",
  define: {
    timestamps: true,
    underscored: true,
  },
};
