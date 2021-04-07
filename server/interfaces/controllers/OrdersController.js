'use strict';

const Boom = require('@hapi/boom');
const CreateOrder = require('../../application/use_cases/CreateOrder');
const ListOrders = require('../../application/use_cases/ListUsers');
const GetOrder = require('../../application/use_cases/GetUser');
const DeleteOrder = require('../../application/use_cases/DeleteUser');
const UpdateOrder  = require('../../application/use_cases/UpdateUser');

module.exports = {

  async CreateOrder(request, h) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id, upgrade_time, mobile_phone } = request.payload;

    try {
      // Treatment
      const user = await CreateOrder(full_name, last_name, email, pass, register_time, last_entry, status, admin, parent_id, upgrade_time, mobile_phone, serviceLocator);

      // Output
      return serviceLocator.userSerializer.serialize(user);

    } catch (error) {
      let message = "An internal server error occurred"
      if (error.parent != undefined && error.parent.constraint == "uq_email_auth_user")
        message = "This email is already registered"
      else
        console.log(error);
      return h.response({ statusCode: 500, error: "Internal Server Error", mensaje: message }).code(500)
    }
  },


  /* async updateUser(request) {
    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const userId = request.params.id;
    const { full_name, last_name, email, pass, status, admin, parent_id } = request.payload;

    // Treatment
  
    const user = await UpdateUser(userId, full_name, last_name, email, pass, status, admin, parent_id, serviceLocator);
  
    // Output
    if (user) {
      return serviceLocator.userSerializer.serialize(user);
    } else {
      return Boom.notFound('User not found');
    }
  }, */

//   async findUsers(request) {

//     // Context
//     const serviceLocator = request.server.app.serviceLocator;

//     // Treatment
//     const users = await ListUsers(serviceLocator);

//     // Output
//     return users.map(serviceLocator.userSerializer.serialize)
//   },

//   async getUser(request) {

//     // Context
//     const serviceLocator = request.server.app.serviceLocator;

//     // Input
//     const userId = request.params.id;

//     // Treatment
//     const user = await GetUser(userId, serviceLocator);

//     // Output
//     if (!user) {
//       return Boom.notFound('User not found');
//     }

//     return serviceLocator.userSerializer.serialize(user);
//   },
  
//   async deleteUser(request, h) {

//     // Context
//     const serviceLocator = request.server.app.serviceLocator;

//     // Input
//     const userId = request.params.id;

//     // Treatment
//     await DeleteUser(userId, serviceLocator);

//     // Output
//     return h.response().code(204);
//   },
};
