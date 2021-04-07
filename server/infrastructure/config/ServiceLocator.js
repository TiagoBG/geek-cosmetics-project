'use strict';

const constants = require('./Constants');
const environment = require('./Environment');
const OrderSerializer = require('../../interfaces/serializers/OrderSerializer');

function buildBeans() {

  const beans = {
    orderSerializer: new OrderSerializer(),
  }; 

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    const OrderRepositoryPostgres= require('../repositories/OrderRepositoryPostgres');
    beans.orderRepository = new OrderRepositoryPostgres();
  } 

  return beans;
}

module.exports = buildBeans();
