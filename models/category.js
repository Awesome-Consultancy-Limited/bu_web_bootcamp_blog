const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        categoryName: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB('long')
        }
    });
    return Category;
}