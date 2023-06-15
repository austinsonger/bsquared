import db from "../database/db.js";

// Set a basic list of banned words
export default function setDefaultBannedWords() {
  // Words to ban
  const words = ["naughtyword1", "naughtyword2"];

  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO banned_words VALUES (?)");
    for (const word of words) {
      stmt.run(word);
    }
    stmt.finalize();
  });
}
