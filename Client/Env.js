/*
 * The environment variables used for development & production for the client
 */
const CLIENT_URL;
if (process.env.NODE_ENV === "development") CLIENT_URL = "0.0.0.0";
else CLIENT_URL = "192.168.99.100"; // Docker Network IP

const SERVER_PORT = 32000;

module.exports = {CLIENT_URL, SERVER_PORT};