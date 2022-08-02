"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "upadated_at");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "updated_at");
  },
};
