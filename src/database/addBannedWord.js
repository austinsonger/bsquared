import db from "./db.js";

export default function addBannedWord(word) {
  db.run("INSERT INTO banned_words VALUES (?)", word);
}
