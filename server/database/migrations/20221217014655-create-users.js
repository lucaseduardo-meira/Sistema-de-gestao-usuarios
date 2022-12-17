"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // return queryInterface.createTable("users", {
    //   id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //     allowNull: false,
    //   },
    //   name: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   password: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   created_at: {
    //     type: sequelize.DATE,
    //     allowNUll: false,
    //   },
    //   update_at: {
    //     type: sequelize.DATE,
    //     allowNUll: false,
    //   },
    // });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
