const dotenv = require("dotenv");

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "crudproject",
  password: "crudpassword",
  database: "crudsql",
  define: {
    timestamps: true,
    underscored: true,
  },
};
