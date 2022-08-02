const User = require("../model/User");
const { login } = require("../services/render");
const services = require("../services/render");
const session = require("express-session");

module.exports = {
  async login(req, res) {
    const { name, password } = req.body;
    // Verify if name already exists
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length < 1) {
      return console.log("usuario não existe");
    }
    const find_user = User.findAll({
      where: {
        name: name,
        password: password,
      },
    });
    if ((await find_user).length === 1) {
      req.session.login = name;
      res.redirect("/");
    } else {
      res.render("login");
    }
  },
};
