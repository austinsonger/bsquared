// TODO: Check the database for 'regular' access_level

// Checks the user's tags info, and their database record
// export default function accessControl(tags, userRecord) {
export default function accessControl(tags) {
  if (tags.badges["broadcaster"] == "1") {
    return "broadcaster";
  }

  if (tags.mod) {
    return "mod";
  }

  if (tags.subscriber) {
    return "sub";
  }

  if (tags.badges.vip == "1") {
    return "vip";
  }

  // Default to 'viewer' access level
  return "viewer";
}
