const dbConfig = require("../dbConfig");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Models
db.articles = require("./article")(sequelize, Sequelize);
db.categories = require("./category")(sequelize, Sequelize);
db.authors = require("./author")(sequelize, Sequelize);
//Relationships
db.articles.belongsTo(db.categories,{foreignKey: 'categoryId'});
db.articles.belongsTo(db.authors,{foreignKey: 'authorId'});


module.exports = db;