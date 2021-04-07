'use strict';

module.exports = class {

  persist(domainOrder) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  merge(domainOrder) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  remove(orderId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  get(orderId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
  
  find() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

};