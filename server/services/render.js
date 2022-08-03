// Login e home page
exports.home = (req, res) => {
  if (req.session.login) {
    res.render("index");
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
exports.add_user = (req, res) => {};

exports.update_user = (req, res) => {
  res.render("update_user");
};
