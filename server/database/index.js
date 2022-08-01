const Sequelize = require("sequelize");
const dbConfig = require("../database");

const User = require("../model/User");

const connection = new Sequelize(dbConfig);

module.exports = connection;
