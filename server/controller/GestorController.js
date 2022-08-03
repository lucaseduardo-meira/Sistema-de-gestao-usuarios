const User = require("../model/User");
const Gestor = require("../model/Gestor");
const session = require("express-session");

module.exports = {
  async store(req, res) {
    const user = req.session.login;
    const { name, email, gender, status } = req.body;

    const user_id = await User.findAll({
      attributes: ["id"],
      where: {
        name: user,
      },
    });
    if (!user_id) {
      return res.status(400).json({ error: "user not found" });
    }

    const gestor = await Gestor.create({
      name,
      email,
      gender,
      status,
      user_id,
    });

    return res.json(gestor);
  },
};
