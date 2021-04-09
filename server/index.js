'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({
  port: 3000,
  host: 'localhost'
});
server.register({ 
  register: require('hapi-plugin-pg'),
   options: { 
    connectionString: process.env.DATABASE_URI
       
  }
}, (err) => { 
  if (err) { 
    throw err; 
  }
});

server.route({ 
  method: 'GET',
   path: '/products',
   handler: function (request, reply) { 
    const products = request.params.name; 
    request.pg.client.query("SELECT product_description FROM products", [products], (err, result) => { 
      if (err) { 
        return reply(err).code(500); 
      } 
      if (!result ||  !result.rows || result.rows.length === 0) { 
        return reply({
          body: '‘Not Found’'
        }).code(404); 
      } 
      return reply(result.rows); 
    }); 
  },
   config: { 
    validate: { 
      params: Joi.object({ 
        name: Joi.string().alphanum().required() 
      }) 
    } 
  }
});

server.start((err) => { 
  if (err) { 
    throw err; 
  } 
  console.log(`Server running at: ${server.info.uri}`);
});