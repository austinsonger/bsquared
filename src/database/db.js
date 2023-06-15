import sqlite3 from "sqlite3";

// Create the SQLite database when bot starts
const db = new sqlite3.Database(
  // Filename for persistent storage
  "src/database/db.sqlite",
  // Mode = (default) OPEN_READWRITE | OPEN_CREATE | OPEN_FULLMUTEX
  // Callback to log errors or confirm connection
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("💾 [DATABASE] Connected to database.");
  }
);

// CREATE BANNED WORDS TABLE
/*
 * word (text)
 */
// Used for sanitising on-screen sub alerts
db.run(
  "CREATE TABLE IF NOT EXISTS banned_words(word text PRIMARY KEY)",
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

// CREATE USERS TABLE
/*
 * username (text) PK
 * points (int)
 * access_level (text)
 * social_platform (text)
 * social_username (text)
 */
db.run(
  "CREATE TABLE IF NOT EXISTS users(username text PRIMARY KEY, points integer, access_level text, social_platform text, social_username text)",
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

// CREATE COMMANDS TABLE
/*
 * command (text)
 * response (text)
 * help_text (text)
 * access_level (text)
 */
db.run(
  "CREATE TABLE IF NOT EXISTS commands(command text PRIMARY KEY, response text, help_text text, access_level text)",
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

// Make the db available to other functions
export default db;
