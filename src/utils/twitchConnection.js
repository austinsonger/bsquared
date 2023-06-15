import dotenv from "dotenv";
import tmi from "tmi.js";

dotenv.config();

// Connect to TMI.js
export const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.BOT_OAUTH
  },
  channels: [process.env.CHANNEL_NAME]
});
client.connect().catch(console.error);
