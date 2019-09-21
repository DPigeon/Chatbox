/*
 * Handles all the linux commands we can add or delete. Displays them as well
 */

let commands = [
  ["mkdir", "make a new directory"],
  ["touch", "create a new file"],
  ["cd", "change directory"],
  ["cp", "copy a file from source to destination"],
  ["rm", "remove a file"],
  ["rm -R", "remove directory"],
  ["git add", "stage files on git"],
  ["git commit -m", "commit files on git"],
  ["git push", "push files on git"],
  ["git pull", "pull files from the repository"]
];

function emitCommands(message) {
  for (var i = 0; i < commands.length; i++) {
    if (message.textMessage.includes(`$${commands[i][0]}`))
      console.log(
        `${message.username} has attempted to ${commands[i][1]}. Try $${
          commands[i][0]
        } yourself !`
      );
  }
}

module.exports = { emitCommands };
