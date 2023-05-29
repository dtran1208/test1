const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', root, lacaigi1208, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
