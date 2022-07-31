var Userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Conteudo não pode estar vazio!" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  // savge user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro ao criar",
      });
    });
};

// return all users / single user
exports.find = (req, res) => {};

// update new user
exports.update = (req, res) => {};

//Delete user with id
exports.delete = (req, res) => {};
