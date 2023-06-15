import { obs } from "../utils/obsConnection";

// STOP STREAMING
export function stopStreaming(inputDelay) {
  // Set delay to 30 seconds if not otherwise specified
  const delay = inputDelay || 30000;

  setTimeout(() => {
    obs.call("StopStream");
  }, delay);
}
