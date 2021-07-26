export const beautfiyDate = (dateString: string) => {
  const date = new Date(dateString);
  const utcString = date.toUTCString();
  let beautiful = utcString.substring(0, utcString.length - 4);

  return beautiful;
};