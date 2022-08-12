"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.addColumn(
          'languageLevels',
          'userId',
          {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'Users',
              key: 'id',
              as: 'userId',
            }
          },
          { transaction }
        );
        await transaction.commit();
      } catch (err) {
        await transaction.rollback(); 
        throw err;
      }
    },

    

    async down(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.removeColumn('languageLevels', 'userId', { transaction });
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }
    }
  }