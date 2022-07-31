const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  //   select: false,
  // },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
