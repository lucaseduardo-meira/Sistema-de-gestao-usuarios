const User = require("../model/User");
const Gestor = require("../model/Gestor");
const session = require("express-session");
const { login } = require("./UserController");
const { json } = require("body-parser");
const { destroy } = require("../model/User");

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
    const id = await User.findAll({
      raw: true,
      attributes: ["id"],
      where: {
        name: login,
      },
    });
    if (!id) {
      return res.status(400).json({ error: "User not found" });
    }

    const user_id = id[0].id;

    const gestor = await User.findByPk(user_id, {
      include: { association: "gestores" },
    });

    const index = gestor.gestores;

    return res.render("index", { index: index });
  },

  async delete(req, res) {
    const { id } = req.params;
    const row = await Gestor.destroy({
      where: { id },
    });

    res.redirect("/");
  },

  async showupdate(req, res) {
    const { id } = req.params;
    const row = await Gestor.findOne({
      raw: true,
      where: { id },
    });
    if (row) {
      res.render("update_user", { user: row });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const user = req.session.login;
    const { name, email, gender, status } = req.body;

    const u_id = await User.findAll({
      raw: true,
      attributes: ["id"],
      where: {
        name: user,
      },
    });
    if (!u_id) {
      return res.status(400).json({ error: "user not found" });
    }

    const user_id = u_id[0].id;
    const update = await Gestor.update(
      {
        name,
        email,
        gender,
        status,
      },
      {
        where: { id: id },
      }
    );
    res.redirect("/");
  },
};
