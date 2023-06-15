import db from "./db.js";

export default function addCommand(command, response) {
  db.run("INSERT INTO commands VALUES (?, ?)", command, response);
}
