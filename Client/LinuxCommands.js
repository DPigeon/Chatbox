/*
 * Handles all the linux commands we can add or delete. Displays them as well
 */

/*
 * [Command, Description]
 */
let commands = [
  // Linux Basic Commands
  ["mkdir", "make a new directory"],
  ["touch", "create a new file"],
  ["cd", "change directory"],
  ["cp", "copy a file from source to destination"],
  ["rm", "remove a file"],
  ["rm -rf", "remove directory with all its content"],
  ["rmdir", "remove a directory"],
  ["ping", "test reachability of a host"],
  ["ls", "list the files in the directory"],
  ["chmod", "change the permission of a file"],
  ["netstat", "display network connections"],
  ["ipconfig", "look at the network IPs"],
  // Git Basic Commands
  ["git init", "initialize a git local repository"],
  ["git status", "look at its git status"],
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
