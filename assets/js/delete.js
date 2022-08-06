const path = require("path");
const GestorController = require(path.resolve(
  __dirname,
  "server/controller/GestorController"
));

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(GestorController.delete);
}
