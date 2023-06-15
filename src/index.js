import handleCommand from "./twitch/handleCommands.js";
import subAlert from "./twitch/handleEvents.js";
import { client } from "./utils/twitchConnection.js";

// HANDLE TWITCH MESSAGES
client.on("message", (channel, tags, message, self) => {
  // Ignore messages from bot
  if (self) return;

  //   console.log("CHANNEL", channel);
  //   console.log("TAGS", tags);
  //   console.log("USERNAME", tags["display-name"]);
  //   console.log("MESSAGE", message);
  //   console.log("SELF", self);

  // TODO: Sanitise input
  //    remove !
  //    username to lowercase
  //    check for invalid characters
  if (message.startsWith("!")) {
    // Remove "!" from the message
    const command = message.slice(1);

    // Process !commands
    handleCommand(client, channel, tags, command);
  } else {
    return;
  }
});

// HANDLE TWITCH EVENTS
/*
 * subscription, resub, anonymous gifts, upgrades, gifts, prime
 * raided, hosted
 * bits
 * channel point redemption
 */
// Subscribe event
client.on("subscription", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Resub event
client.on("resub", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Anonymous gifted sub upgrade
client.on(
  "anongiftpaidupgrade",
  (channel, username, method, message, userstate) => {
    subAlert(channel, username, method, message, userstate);
  }
);
// Anonymous gifted sub
client.on("anonsubgift", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Anonymous sub mystery gift
client.on(
  "anonsubmysterygift",
  (channel, username, method, message, userstate) => {
    subAlert(channel, username, method, message, userstate);
  }
);
// Gift paid upgrade
client.on(
  "giftpaidupgrade",
  (channel, username, method, message, userstate) => {
    subAlert(channel, username, method, message, userstate);
  }
);
// Prime paid upgrade
client.on(
  "primepaidupgrade",
  (channel, username, method, message, userstate) => {
    subAlert(channel, username, method, message, userstate);
  }
);
// Gifted sub
client.on("subgift", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Sub mystery gift
client.on("submysterygift", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Subscribers
client.on("subscribers", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Raid
client.on("raided", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});
// Host
client.on("hosted", (channel, username, method, message, userstate) => {
  subAlert(channel, username, method, message, userstate);
});

// Cheers
client.on("cheer", (channel, userstate, message) => {
  // TODO: handle cheers
  // TODO: Add bits table to database
});

// Channel point redemptions
client.on("redeem", (channel, username, rewardType, tags, message) => {
  // TODO: handle channel points
  // TODO: Add channel_points table to database
});
