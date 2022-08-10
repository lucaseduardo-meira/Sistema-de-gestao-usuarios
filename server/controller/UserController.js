const User = require("../model/User");
const { login } = require("../services/render");
const services = require("../services/render");
const session = require("express-session");
const GestorController = require("./GestorController");
const bcrypt = require("bcrypt");

module.exports = {
  async login(req, res) {
    const { name, password } = req.body;
    // Validation
    if (!name || !password) {
      res.render("login_erro", { erro: "Preencha os campos" });
      return;
    } else {
      // Verify if name already exists
      const find_name = User.findAll({
        where: {
          name: name,
        },
      });
      if ((await find_name).length < 1) {
        res.render("login_erro", { erro: "Usuario não encontrado" });
        return;
      }
      const find_user = await User.findAll({
        where: {
          name: name,
          password: password,
        },
      });

      if (find_user.length === 1) {
        //LOGAR USER
        req.session.login = name;
      } else {
        res.render("login_erro", { erro: "Senha incorreta" });
        return;
      }
      res.redirect("/");
    }
  },
  async create(req, res) {
    const { name } = req.body;
    var { password } = req.body;
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length === 1) {
      res.render("login_erro", { erro: "Usuario já existe" });
      return;
    } else {
      const hash = await bcrypt.hash(password, 10);
      password = hash;
      const user = await User.create({ name, password });
      const find_user = await User.findAll({
        where: {
          name: name,
          password: password,
        },
      });
      req.session.login = name;
      res.redirect("/");
    }
  },
  async logout(req, res) {
    req.session.login = null;
    res.sendStatus(200);
  },
};
