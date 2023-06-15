import db from "../database/db.js";

// User class and methods for CRUD functions
export default class User {
  constructor(
    // default values if none are provided
    username,
    points = 0,
    access_level = "viewer",
    social_platform = null,
    social_username = null
  ) {
    this.username = username;
    this.points = points;
    this.access_level = access_level;
    this.social_platform = social_platform;
    this.social_username = social_username;
  }

  // Create method
  addToDatabase() {
    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO users VALUES (?, ?, ?, ?, ?)",
        [
          this.username,
          this.points,
          this.access_level,
          this.social_platform,
          this.social_username
        ],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.lastID);
          }
        }
      );
    });
  }

  // Retrieve method
  retrieveFromDatabase() {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM users WHERE username = ?",
        [this.username],
        function (err, row) {
          if (err) {
            reject(err);
          } else {
            resolve(row);
          }
        }
      );
    });
  }

  // Update method
  updateInDatabase() {
    return new Promise((resolve, reject) => {
      const fieldsToUpdate = {
        username: this.username,
        points: this.points,
        access_level: this.access_level,
        social_platform: this.social_platform,
        social_username: this.social_username
      };

      const setClause = Object.entries(fieldsToUpdate)
        .filter(([_, value]) => value !== undefined)
        .map(([key, _]) => `${key} = ?`)
        .join(", ");

      const values = Object.entries(fieldsToUpdate)
        .filter(([_, value]) => value !== undefined)
        .map(([_, value]) => value);

      const sql = `UPDATE users SET ${setClause} WHERE username = ?`;

      db.run(sql, [...values, this.username], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.changes);
        }
      });
    });
  }

  // Delete method
  deleteFromDatabase() {
    return new Promise((resolve, reject) => {
      db.run(
        "DELETE FROM users WHERE username = ?",
        [this.username],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this.changes);
          }
        }
      );
    });
  }
}
