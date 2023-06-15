// CHECK SOURCE VISIBILITY
// Checks the visibility of a source
function checkSourceVisibility(scene, source) {
  console.log(
    `🛠 checkSourceVisibility 🛠 triggered: Scene = ${scene}. Source = ${source}`
  );
}

// TOGGLE SOURCE
// Shows a source for X seconds, then hides it
export function toggleSource(scene, source, inputTimer) {
  // If no timer provided, default to 5 seconds
  const timer = inputTimer || 5000;

  // Show source
  console.log(
    `🛠 toggleSource 🛠 triggered: Scene = ${scene}. Source = ${source}. Timer = ${timer}`
  );

  // Hide source after X seconds
  setTimeout(() => {
    console.log(`🛠 toggleSource 🛠 timeout`);
  }, timer);
}

// SHOW SOURCE
// Shows a source
export function showSource(scene, source) {
  console.log(`🛠 showSource 🛠 triggered: Scene = ${scene}. Source = ${source}`);
}

// HIDE SOURCE
// Hides an already showing source
export function hideSource(scene, source) {
  // Check if source is visible
  let sourceVisible = checkSourceVisibility(scene, source);
  // Do nothing if source is already hidden
  if (!sourceVisible) {
    // Check OBS source for visible state flag
    console.log(
      `🛠 hideSource > sourceVisible 🛠 triggered: sourceVisible = ${sourceVisible}`
    );

    return;
  }
  console.log(`🛠 hideSource 🛠 triggered: Scene = ${scene}. Source = ${source}`);
}
