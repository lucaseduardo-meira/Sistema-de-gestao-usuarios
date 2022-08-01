const Sequelize = require("sequelize");
const dbConfig = require("../connection/connection");

const User = require("../model/User");

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
