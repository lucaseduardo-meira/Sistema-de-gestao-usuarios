const Gestor = require("../model/Gestor");
const session = require("express-session");
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
      const find_name = Gestor.findAll({
        where: {
          name: name,
        },
      });
      if ((await find_name).length < 1) {
        res.render("login_erro", { erro: "Usuario não encontrado" });
        return;
      }
      const find_user = await Gestor.findAll({
        raw: true,
        attributes: ["password"],
        where: {
          name: name,
        },
      });
      const hash_password = find_user[0].password;

      if (!(await bcrypt.compare(password, hash_password))) {
        return res.render("login_erro", { erro: "Senha incorreta" });
      }
      req.session.login = name;
      res.redirect("/");
    }
  },
  async create(req, res) {
    const { name } = req.body;
    var { password } = req.body;
    const find_name = Gestor.findAll({
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
      const gestor = await Gestor.create({ name, password });
      const find_gestor = await Gestor.findAll({
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
