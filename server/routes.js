module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
      server.route([
        {
          method: 'GET',
          path: '/',
          handler: async (req, res) => {
            return 'Hello Orders!';
          }
        },
        {
            method: 'POST',
            path: '/orders',
            handler: async (req, res) => {
              const newOrder = {
                order_date: req.payload.order_date,
                order_products: req.payload.order_products
              };
              return res.response({
                datos: newOrder
              }).type('application/json');
            }
          }
      ]);
    }
  }