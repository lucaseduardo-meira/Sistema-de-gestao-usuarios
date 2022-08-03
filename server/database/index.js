const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../model/User");
const Gestor = require("../model/Gestor");

const connection = new Sequelize(dbConfig);

User.init(connection);
Gestor.init(connection);

Gestor.associate(connection.models);

module.exports = connection;
