"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
        await queryInterface.addColumn(
          'ToolLevels',
          'toolId',
          {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
              model: 'Tools',
              key: 'id',
              as: 'toolId',
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
        await queryInterface.removeColumn('ToolLevels', 'toolId', { transaction });
        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
        throw err;
      }
    }
  }