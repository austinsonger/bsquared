import accessControl from "./accessControl.js";
import commands from "./commandHierarchy.js";
import parseCommand from "./helper/parseCommand.js";

export default function handleCommand(client, channel, tags, command) {
  try {
    const username = tags["display-name"];
    // const accessLevel = accessControl(tags, userRecord);
    const accessLevel = accessControl(tags);

    // Grab any extra !command parameters
    const parsedCommand = parseCommand(command);

    // Use Operational Chaining operator to skip explicit null checks
    // const commandFunction = commands[accessLevel]?.[command];
    const commandFunction = commands[accessLevel]?.[parsedCommand.command];

    if (commandFunction) {
      console.log(commandFunction);
      // Pass in the command and any additional parameters
      commandFunction(client, channel, username, ...parsedCommand.args);
    } else {
      // When there is no matching command for this access level, do nothing
      return;
    }
  } catch (err) {
    client.say(channel, `Something went wrong`);
    console.error(err);
  }
}
