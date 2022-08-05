const User = require("../model/User");
const Gestor = require("../model/Gestor");
const session = require("express-session");
const { login } = require("./UserController");

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
    // console.log(req.session.login);
    // const login = req.session.login;
    // const { name, email, gender, status } = req.body;

    // const user = await User.findAll({
    //   raw: true,
    //   attributes: ["id"],
    //   where: {
    //     name: login,
    //   },
    // });
    // if (!user) {
    //   return res.status(400).json({ error: "user not found" });
    // }

    // const id = user[0].id;

    // const gestor = await Gestor.findAll({
    //   where: {
    //     user_id: id,
    //   },
    // });

    // return gestor;
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

    const index = await User.findByPk(user_id, {
      include: { association: "gestores" },
    });

    return res.json(index.gestores);
  },
};
