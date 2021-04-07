'use strict';

const _serializeSingleOrder = (order) => {
  return {
    "id" : order.id, 
    "order_date" : order.order_date, 
    "order_products" : order.order_products,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleOrder);
    }
    return _serializeSingleOrder(data);
  }

};