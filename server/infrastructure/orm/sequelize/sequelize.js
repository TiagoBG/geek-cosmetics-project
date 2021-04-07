'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/Environment');

const sequelize = new Sequelize(environment.database.url);

/*ACÁ DEBEN IR TODOS LOS MODELOS*/
console.log(sequelize, "---------------", environment.database.url);
sequelize.require('./models/Orders');
// sequelize.import('./models/products');

module.exports = sequelize;