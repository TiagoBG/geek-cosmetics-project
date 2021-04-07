'use strict';

const { Sequelize } = require('sequelize');
const environment = require('../../config/Environment');

const sequelize = new Sequelize(environment.database.url);

/*ACÁ DEBEN IR TODOS LOS MODELOS*/
sequelize.import('./models/Orders');

module.exports = sequelize;