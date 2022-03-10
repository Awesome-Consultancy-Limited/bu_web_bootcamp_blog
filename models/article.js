const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING
        },
        authorId: {
            type: Sequelize.INTEGER
        },
        categoryId: {
            type: Sequelize.INTEGER
        },
        image: {
            type: Sequelize.BLOB('long')
        }
    });
    return Article;
}