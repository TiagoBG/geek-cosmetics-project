'use strict';

const OrdersController = require('../controllers/OrdersController');

module.exports = {
  name: 'orders',
  version: '1.0.0',
  register: async (server) => {

    server.route([
    //   {
    //     method: 'GET',
    //     path: '/orders',
    //     handler: OrdersController.findOrders,
    //     config: {
    //       // auth: 'oauth-jwt',
    //       //handler: (request) => request.auth.credentials.uid,
    //       description: 'List all users',
    //       tags: ['api'],
    //     }
    //   },
      // {
      //   method: 'GET',
      //   path: '/users_cv',
      //   handler: UsersController.getUserCV,
      //   config: {
      //     // auth: 'oauth-jwt',
      //     //handler: (request) => request.auth.credentials.uid,
      //     description: 'List all users cv',
      //     tags: ['api'],
      //   }
      // },
      {
        method: 'POST',
        path: '/orders',
        handler: OrdersController.createOrder,
        options: {
          description: 'Create a new order',
          tags: ['api'],
        },
      },
    //   {
    //     method: 'GET',
    //     path: '/users/{id}',
    //     handler: UsersController.getUser,
    //     options: {
    //       description: 'Get a user for your {id}',
    //       tags: ['api'],
    //     },
    //   },
    //   {
    //     method: 'DELETE',
    //     path: '/users/{id}',
    //     handler: UsersController.deleteUser,
    //     options: {
    //       description: 'Delete a user',
    //       tags: ['api'],
    //     },
    //   },
    //   {
    //     method: 'PUT',
    //     path: '/users/{id}',
    //     handler: UsersController.updateUser,
    //     options: {
    //       description: 'Update an existing user',
    //       tags: ['api'],
    //     },
    //   },
    ]);
  }
};