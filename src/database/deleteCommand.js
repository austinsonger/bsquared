import db from "./db.js";

export default function deleteCommand(command) {
  db.run("DELETE FROM commands WHERE command = (?)", command);
}
