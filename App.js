/*
 * The main application
 */

const { startGrpcServer } = require("./Server/Entrypoint");

startGrpcServer();
console.log("[👨🏼‍💻 <--> 👩🏼‍💻] Chatbox Server Started.");
