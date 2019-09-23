/*
 * The environment variables used for development & production for the client
 */
let CLIENT_URL = "0.0.0.0";
if (process.env.NODE_ENV == "production") CLIENT_URL = "192.168.99.100";

const SERVER_PORT = 32000;

module.exports = { CLIENT_URL, SERVER_PORT };
