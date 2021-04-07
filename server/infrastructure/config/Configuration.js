'use strict';

require('dotenv').config();

const constants = require('./Constants');
const environment = require('./Environment');

module.exports = {

  async init() {    
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
      const sequelize = require('../orm/sequelize/sequelize');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  }
};