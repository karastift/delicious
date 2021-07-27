const days = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');

export const beautifyDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = days[date.getDay() - 1];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return day + ' ' + hours + ':' + (minutes === 0 ? '00' : minutes);
};