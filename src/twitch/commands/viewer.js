import User from "../../database/user.js";

// HELLO BOT
// Says hi to the bot, and the bot responds
/*
 * !hi
 */
export function helloBot(client, channel, username) {
  client.say(channel, `Hi, ${username}!`);
}

// ADD SOCIAL INFO
// Allows a user to add their own social media info
/*
 * !mysocial (social platform) (social username)
 * !mysocial twitter bobby
 */
export async function addMySocialCommand(
  client,
  channel,
  username,
  social_platform,
  social_username
) {
  // Create a new user instance with the given username
  let user = new User(username);

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

// ADD SOCIAL INFO
// Allows a user to add their own social media info
/*
 * !mysocial (social platform) (social username)
 * !mysocial twitter bobby
 */
export async function aboutMeCommand(client, channel, username) {
  // Convert the display-name to lowercase
  const parsedUsername = username.toLowerCase();

  // Create a new user instance with the given username
  let user = new User(parsedUsername);

  try {
    // Retrieve user from database
    const userRecord = await user.retrieveFromDatabase();

    // Handle missing user
    if (!userRecord) {
      console.log(`${username} does not exist`);
      return;
    }

    // TODO: this
    // Check what the social type is (twitter, instagram, etsy etc)
    console.log(
      `${userRecord.username} goes by ${userRecord.social_username} on ${userRecord.social_platform}`
    );
  } catch (err) {
    console.error(err);
  }
}
