const { default: axios } = require("axios");
const GestorController = require("../controller/GestorController");

// Login e home page
exports.login = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};

exports.home = (req, res) => {
  if (req.session.login) {
    GestorController.find(req, res);
  } else {
    res.redirect("/login");
  }
};

// Create user to users database
exports.create_user = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("create_login");
  }
};

// Create user to gestors database
exports.add_user = (req, res) => {
  if (req.session.login) {
    res.render("add_user");
  } else {
    res.redirect("/");
  }
};

// Update user
exports.update_user = (req, res) => {
  if (req.session.login) {
    GestorController.showupdate(req, res);
  } else {
    res.redirect("/");
  }
};
