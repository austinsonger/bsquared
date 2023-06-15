import allCommands from "./commands.js";

// Listed in ascending order
const accessLevels = ["viewer", "vip", "sub", "mod", "broadcaster"];

let commands = {};

accessLevels.forEach((level) => {
  commands[level] = {
    ...commands[accessLevels[accessLevels.indexOf(level) - 1] || {}],
    ...allCommands[level]
  };
});

export default commands;
