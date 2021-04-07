const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id_order: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    order_products: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id_order" },
        ]
      },
    ]
  });
};
