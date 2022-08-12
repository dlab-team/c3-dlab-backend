"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.addColumn(
          'languageLevels',
          'languageId',
          {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'Languages',
              key: 'id',
              as: 'languageId',
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
        await queryInterface.removeColumn('languageLevels', 'languageId', { transaction });
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }
    }
  }