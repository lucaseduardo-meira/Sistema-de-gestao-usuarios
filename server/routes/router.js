const express = require("express");
const route = express.Router();

const services = require("../services/render");
const UserController = require("../controller/controller");

/**
 * @description login page
 * @method GET /
 */

route.get("/", services.login);

/**
 * @description add users
 * @method GET /add-users
 */

route.post("/", UserController.store);

route.get("/add-user", services.add_user);
/**
 * @description update users
 * @method GET /update-users
 */

route.get("/update-user", services.update_user);

module.exports = route;
