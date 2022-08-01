const Sequelize = require("sequelize");
const dbConfig = require("../database/connection");

const connection = new Sequelize(dbConfig);

module.exports = connection;
