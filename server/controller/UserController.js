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
      //LOGAR USER
      req.session.login = name;
      console.log(req.session.login);
      res.render("index");
    } else {
      res.render("login");
    }
  },
  async create(req, res) {
    const { name, password } = req.body;
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length > 0) {
      return console.log("Usuario já existe");
    } else {
      const user = await User.create({ name, password });
      req.session.login = name;
      console.log(session.login);
      res.redirect("/");
    }
  },
};
