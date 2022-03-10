const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
        authorName: {
            type: Sequelize.STRING
        },
        profile: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB('long')
        }
    });
    return Author;
}