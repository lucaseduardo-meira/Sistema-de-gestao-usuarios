const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../model/User");
const gestor = require("../model/Gestor");
const Gestor = require("../model/Gestor");

const connection = new Sequelize(dbConfig);

User.init(connection);
Gestor.init(connection);

module.exports = connection;
