const express = require("express");
const route = express.Router();

const login = require("../controller/UserController");
const services = require("../services/render");
const UserController = require("../controller/UserController");

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

route.get("/add-user", services.add_user);
/**
 * @description update users
 * @method GET /update-users
 */

route.get("/update-user", services.update_user);

module.exports = route;
