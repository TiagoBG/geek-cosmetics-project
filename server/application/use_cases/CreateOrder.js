'use strict';

const Order = require('../../domain/Orders');
const { generateTimestampUnix } = require('../utilities/GenerateTimestamp');

module.exports = async (order_date, order_products, {orderRepository}) => {
  order_date = await generateTimestampUnix()
  const order = new Order(null, order_date, order_products);
  console.log('CREATE ORDER USE CASE', order, orderRepository.persist)
  return orderRepository.persist(order);
};
