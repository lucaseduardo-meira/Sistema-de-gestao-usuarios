require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");

require("./server/database");

// Express config
const app = express();

// Path config
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny"));

// parse request
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "uiodhfiuabfusuoga53da143108fboiad" }));

// view engine
app.set("view engine", "ejs");

// load asset
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use(express.json());
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
