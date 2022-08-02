const User = require("../model/User");

module.exports = {
  async store(req, res) {
    const { name, password } = req.body;
    // Verify if name already exists
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length > 0) {
      console.log("User already exists");
      return 1;
    }
    const user = await User.create({ name, password });
    return res.json(user);
  },
};
