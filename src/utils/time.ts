export const getMinutesFromSeconds = (seconds: number) =>
  String(Math.round(seconds / 60)) + ' minutes';
