import User from "../../database/user.js";

// TODO: Handle username externally, so .toLowerCase can be added to other stuff

// DATABASE
// ADD NEW USER
// Allows the mod to add the user to the database
/*
 * !user add (twitch username)
 * !user add bob
 */
export function addNewUserCommand(client, channel, username, targetUser) {
  // TODO: Remove need for this in every function
  // Convert the display-name to lowercase
  const parsedUsername = targetUser.toLowerCase();

  let user = new User(
    parsedUsername,
    5, // points to start out with
    "viewer", // access_role until updated
    null, // social_platform
    null // social_username
  );

  // Add user to database
  user
    .addToDatabase()
    .then((id) => console.log(`User added with ID ${id}`))
    .catch((err) => console.error(err));
}

// DELETE USER
// Allows the mod to remove the user from the database
/*
 * !user remove (twitch username)
 * !user remove bob
 */
export function deleteUserCommand(client, channel, username, targetUser) {
  // Convert the display-name to lowercase
  const parsedUsername = targetUser.toLowerCase();

  // Create a new user instance with the given username
  let user = new User(parsedUsername);

  // Delete user from database
  user
    .deleteFromDatabase()
    .then((changes) => console.log(`${changes} row(s) deleted`))
    .catch((err) => console.error(err));
}

// ADD POINTS TO USER
// Allows the mod to add points to the user
/*
 * !points add (twitch username) (number of points)
 * !points add bob 100
 */
// Add points to user
export async function addUserPointsCommand(
  client,
  channel,
  username,
  targetUser,
  points
) {
  // Convert the display-name to lowercase
  const parsedUsername = targetUser.toLowerCase();

  // Create a new user instance with the given username
  let user = new User(parsedUsername);

  try {
    // Retrieve user from database
    const userRecord = await user.retrieveFromDatabase();

    // Calculate new points value
    const newPoints = parseInt(userRecord.points) + Math.abs(parseInt(points)); // Use absolute value to ensure points are always added

    // Update the points on the retrieved user object
    userRecord.points = newPoints;

    // Create new User instance with updated data
    let updatedUser = new User(
      userRecord.username,
      userRecord.points,
      userRecord.access_level,
      userRecord.social_platform,
      userRecord.social_username
    );

    // Update user points in database
    updatedUser
      .updateInDatabase()
      .then((changes) => console.log(`${changes} row(s) updated`))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
}

// REMOVE POINTS FROM USER
// Allows the mod to remove points from the user
/*
 * !points take (twitch username) (number of points)
 * !points take bob 100
 */
// Subtract points from user
export async function subtractUserPointsCommand(
  client,
  channel,
  username,
  targetUser,
  points
) {
  // Convert the display-name to lowercase
  const parsedUsername = targetUser.toLowerCase();

  let user = new User(parsedUsername);

  try {
    // Retrieve user from database
    const userRecord = await user.retrieveFromDatabase();

    // Calculate new points value
    const newPoints = parseInt(userRecord.points) - Math.abs(parseInt(points)); // Use absolute value to ensure points are always subtracted

    // Ensure new points value is not less than zero
    userRecord.points = newPoints < 0 ? 0 : newPoints;

    // Create new User instance with updated data
    let updatedUser = new User(
      userRecord.username,
      userRecord.points,
      userRecord.access_level,
      userRecord.social_platform,
      userRecord.social_username
    );

    // Update user points in database
    updatedUser
      .updateInDatabase()
      .then((changes) => console.log(`${changes} row(s) updated`))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
}

// UPDATE SOCIAL INFO
// Allows a mod to change the social info of a user
/*
 * !user social add (twitch username) (social platform) (social username)
 * !user social add bob twitter bobby
 */
export async function updateSocialCommand(
  client,
  channel,
  username,
  targetUser,
  social_platform,
  social_username
) {
  // Convert the display-name to lowercase
  const parsedUsername = targetUser.toLowerCase();

  // Create a new user instance with the given username
  let user = new User(parsedUsername);

  try {
    // Retrieve user from database
    const userRecord = await user.retrieveFromDatabase();

    // Update the socials on the retrieved user object
    userRecord.social_platform = social_platform;
    userRecord.social_username = social_username;

    // Create new User instance with updated data
    let updatedUser = new User(
      userRecord.username,
      userRecord.points,
      userRecord.access_level,
      userRecord.social_platform,
      userRecord.social_username
    );

    // Update user social details in database
    updatedUser
      .updateInDatabase()
      .then((changes) => console.log(`${changes} row(s) updated`))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
  }
}
