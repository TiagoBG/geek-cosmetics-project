'use strict';

const configuration = require('./infrastructure/config/Configuration');
const createServer = require('./infrastructure/server/server');

// Start the server
const init = async () => {

  try {
    await configuration.init();

    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

init();