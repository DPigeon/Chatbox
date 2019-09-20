/* The entrypoint server that users can use to connect
 * We load the proto file, define the useful functions for the server and start the server.
 */

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { SERVER_URL, SERVER_PORT } = require("../env.js");

const server = new grpc.Server();
const SERVER_ADDRESS = `${SERVER_URL}:${SERVER_PORT}`;

let proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("Protos/Chatbox.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);

/*
 * Joining the server with our user array.
 */

let users = [];

function JoinServer(call, callback) {
  users.push(call);
  broadcastChat({ username: "Server", textMessage: "New user joined !" });
}

/*
 * Reception of a message from the client & broadcast the chat
 */

function SendMessage(call, callback) {
  broadcastChat(call.request);
}

function broadcastChat(message) {
  users.forEach(user => {
    user.write(message);
  });
}

/* Start the gRPC Server
 */

server.addService(proto.chatbox.Chat.service, {
  JoinServer: JoinServer,
  SendMessage: SendMessage
});
server.bind(SERVER_ADDRESS, grpc.ServerCredentials.createInsecure());
server.start();
