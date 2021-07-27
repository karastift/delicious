export const beautifyTime = (time: string) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return hours + ':' + (minutes === 0 ? '00' : minutes);
};