import db from "./db.js";

export default function deleteBannedWord(word) {
  db.run("DELETE FROM banned_words WHERE word = (?)", word);
}
