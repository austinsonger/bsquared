// Handle commands of varying lengths
/*
 * !user add bob
 * !user remove bob
 * !points add bob 100
 * !user regular add bob
 * !user regular remove bob
 * !user social add bob twitter bobby
 * !command add !sushi Sushi is delicious!
 */
const multiWordCommands = [
  "user add",
  "user remove",
  "points add",
  "points take",
  "user regular add",
  "user regular remove",
  "user social add",
  "command add"
];

export default function parseCommand(input) {
  // Check if the input starts with a multi-word command
  for (let command of multiWordCommands) {
    if (input.startsWith(command)) {
      return {
        command,
        args: input.slice(command.length).trim().split(" ")
      };
    }
  }

  // If no multi-word command was found, use the first word as the command
  const words = input.split(" ");
  const command = words[0];
  const args = words.slice(1);

  return {
    command,
    args
  };
}
