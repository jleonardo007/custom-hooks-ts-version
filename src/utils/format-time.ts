export function formatMinutes(minutes: number = 0) {
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function formatSeconds(seconds: number = 0) {
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}
