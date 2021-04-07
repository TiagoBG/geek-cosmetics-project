var DataTypes = require("sequelize").DataTypes;
var _orders = require("./Orders");
var _products = require("./Products");

function initModels(sequelize) {
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);


  return {
    orders,
    products,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
