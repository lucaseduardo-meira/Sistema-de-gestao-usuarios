const User = require("../model/User");
const Gestor = require("../model/Gestor");
const session = require("express-session");

module.exports = {
  async store(req, res) {
    const user = req.session.login;
    const { name, email, gender, status } = req.body;

    const id = await User.findAll({
      raw: true,
      attributes: ["id"],
      where: {
        name: user,
      },
    });
    if (!id) {
      return res.status(400).json({ error: "user not found" });
    }

    const user_id = id[0].id;

    const gestor = await Gestor.create({
      name,
      email,
      gender,
      status,
      user_id,
    });
    res.redirect("/");
  },

  async find(req, res) {
    const login = req.session.login;
    const { name, email, gender, status } = req.body;

    const user = await User.findAll({
      raw: true,
      attributes: ["id"],
      where: {
        name: login,
      },
    });
    if (!user) {
      return res.status(400).json({ error: "user not found" });
    }

    const id = user[0].id;

    const gestor = await Gestor.findAll({
      raw: true,
      where: {
        user_id: id,
      },
    });

    res.render("index", { gestor });
  },
};
