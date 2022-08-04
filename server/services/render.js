const UserController = require("../controller/UserController");

// Login e home page
exports.home = (req, res) => {
  if (req.session.login) {
    const user_id = UserController.user_id(req, res);
    console.log("passsed");
    res.redirect("/" + user_id);
  } else {
    res.render("login");
  }
};

exports.create_user = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("create_login");
  }
};

// Create user to database
exports.add_user = (req, res) => {
  if (req.session.login) {
    res.render("add_user");
  } else {
    res.redirect("/");
  }
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
