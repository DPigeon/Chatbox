/*
 * The main application
 */

const { startGrpcServer } = require("./Entrypoint");

startGrpcServer();
console.log("[👨🏼‍💻 <--> 👩🏼‍💻] Chatbox Server Started.");
