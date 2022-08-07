const express = require("express");
const route = express.Router();
const jquery = require("jquery");

const login = require("../controller/UserController");
const services = require("../services/render");
const UserController = require("../controller/UserController");
const GestorController = require("../controller/GestorController");

route.post("/login", UserController.login);
route.get("/login", services.login);

route.get("/", services.home);

route.get("/create_user", services.create_user);

/**
 * @description create_user
 * @method POST /create_user
 */

route.post("/create_user", UserController.create);

/**
 * @description add_userdb
 * @method GET /add_userdb
 */

route.get("/add-user", services.add_user);
/**
 * @description add_userdb
 * @method POST /add_userdb
 */

route.post("/add-user", GestorController.store);

route.get("/update-user/:id", services.update_user);

route.delete("/:id", GestorController.delete);

module.exports = route;
