const express = require("express");
const route = express.Router();

const login = require("../controller/UserController");
const services = require("../services/render");
const UserController = require("../controller/UserController");
const GestorController = require("../controller/GestorController");

// /**
//  * @description login page
//  * @method GET /
//  */

// route.get("/login", services.login);

// /**
//  * @description login post
//  * @method POST /login
//  */

// route.post("/login", UserController.login);

// /**
//  * @description create_user
//  * @method GET /create_user
//  */

route.post("/", UserController.login);

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

route.post("/users/:user_id/add-user", GestorController.store);

route.get("/update-user", services.update_user);

module.exports = route;
