/*
 * The connect file that user uses to connect to the server
 * We load protos, define functions and start the client
 */
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { SERVER_URL, SERVER_PORT } = require("../env");
const SERVER_ADDRESS = `${SERVER_URL}:${SERVER_PORT}`;

var proto = grpc.loadPackageDefinition(
  protoLoader.loadSync("Protos/Chatbox.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);

let username;

/*
 * Initialize the client
 */
let client = new proto.chatbox.Chat(
  SERVER_ADDRESS,
  grpc.credentials.createInsecure()
);

/*
 * Stream between server and client
 */
const readline = require("readline");

function startChat() {
  let channel = client.JoinServer({ username: username });

  channel.on("data", onData);

  reader.on("line", function(message) {
    client.SendMessage(
      { username: username, textMessage: message },
      response => {}
    );
  });
}

/*
 * Listening to data on the server
 */
const { emitCommands } = require("./LinuxCommands");

function onData(message) {
  if (message.username == username) return;
  emitCommands(message);
  console.log(`${message.username}: ${message.textMessage}`);
}

/*
 * Getting the username of the person
 */
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("What is your username ? ", answer => {
  username = answer;
  startChat();
});
