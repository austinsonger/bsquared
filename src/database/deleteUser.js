import db from "./db.js";

export default function deleteUser(username) {
  db.run("DELETE FROM users WHERE username = (?)", username);
}
