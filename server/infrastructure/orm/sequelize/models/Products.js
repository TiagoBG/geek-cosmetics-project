const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id_product: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    product_stocks: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id_product" },
        ]
      },
    ]
  });
};
