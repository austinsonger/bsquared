import dotenv from "dotenv";
import OBSWebSocket from "obs-websocket-js";

dotenv.config();

// Connect to OBS-WEBSOCKET-JS
export const obs = new OBSWebSocket();
obs
  /*  INSTRUCTIONS:
   * In OBS ...
   * 1. go to Tools > WebSocket Server Settings
   * 2. Under Server Settings, copy the Server Port number
   * 2a. Add this to the bot's .env file: OBS_WEBSOCKET_PORT=
   * 3. Check 'Enable Authentication'
   * 4. Create/Generate a password
   * 4.1. Click Show Connect Info button and copy the password
   * 4.2. Add this to the bot's .env file: OBS_WEBSOCKET_PASSWORD=
   * 5. If running the bot locally, leave (.env) OBS_SERVER=localhost
   *    Else, change to an external IP where the bot is hosted
   */
  .connect(
    `ws://${process.env.OBS_SERVER}:${process.env.OBS_WEBSOCKET_PORT} ${process.env.OBS_WEBSOCKET_PASSWORD}`
  )
  .then(() => {
    console.log(`🔌 [OBS] SUCCESS: Connected to OBS WebSocket.`);
  })
  .catch((err) => {
    console.log(err);
  });
