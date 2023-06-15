import db from "./db.js";

export default function addUser(
  username,
  points,
  access_level,
  social_platform,
  social_username
) {
  let points = 5;
  db.run(
    "INSERT INTO users VALUES (?, ?, ?, ?, ?)",
    username,
    points,
    access_level,
    social_platform,
    social_username
  );
}
