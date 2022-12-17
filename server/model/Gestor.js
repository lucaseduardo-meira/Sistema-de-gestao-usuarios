const { Model, DataTypes } = require("sequelize");

class Gestor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: "user_id", as: "gestors" });
  }
}

module.exports = Gestor;
