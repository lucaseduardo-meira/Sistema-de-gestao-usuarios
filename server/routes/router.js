const express = require("express");
const route = express.Router();
const jquery = require("jquery");

const login = require("../controller/UserController");
const services = require("../services/render");
const UserController = require("../controller/UserController");
const GestorController = require("../controller/GestorController");

// Login
route.post("/login", UserController.login);
route.get("/login", services.login);

// Home page
route.get("/", services.home);

// Create user page
route.get("/create_user", services.create_user);
route.post("/create_user", UserController.create);

// Add user page
route.get("/add-user", services.add_user);
route.post("/add-user", GestorController.store);

// Update user page
route.get("/update-user/:id", services.update_user);
route.post("/update-user/:id", GestorController.update);

// Delete
route.delete("/:id", GestorController.delete);

// Logout
route.post("/logout", UserController.logout);

module.exports = route;
