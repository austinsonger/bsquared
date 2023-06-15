import { testCommand } from "./commands/broadcaster.js";
import {
  addNewUserCommand,
  addUserPointsCommand,
  deleteUserCommand,
  subtractUserPointsCommand,
  updateSocialCommand
} from "./commands/mod.js";
import {
  aboutMeCommand,
  addMySocialCommand,
  helloBot
} from "./commands/viewer.js";

const allCommands = {
  broadcaster: {
    test: testCommand,
    "no test": () => console.log(`something`)
  },
  mod: {
    "user add": addNewUserCommand,
    "user remove": deleteUserCommand,
    "points add": addUserPointsCommand,
    "points take": subtractUserPointsCommand,
    "user social add": updateSocialCommand,
    // TODO: this
    "command add": () => console.log(`TODO`)
  },
  sub: {
    "command 5": () => console.log(`something sub`)
  },
  vip: {
    "command 7": () => console.log(`something vip`)
  },
  regular: {
    "command 9": () => console.log(`something regular`)
  },
  viewer: {
    hi: helloBot,
    mysocial: addMySocialCommand,
    aboutme: aboutMeCommand
  }
};

export default allCommands;
