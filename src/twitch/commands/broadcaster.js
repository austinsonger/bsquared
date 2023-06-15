import setDefaultBannedWords from "../../database/setup.js";

// TEST
export function testCommand() {
  console.log(`TEST COMMAND FIRED ==== commands/broadcaster.js`);
  return "broadcaster !test command response";
}

// DATABASE
// INITIALISE DB WITH DEFAULT RECORDS
export function initialiseDatabaseCommand() {
  setDefaultBannedWords();
}
