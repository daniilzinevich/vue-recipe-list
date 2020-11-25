export default () => {
  const toHoursString = (time) => {
    return toTwoDigitString(Math.floor(time / 3600));
  };
  const toMinutesString = (time) => {
    return toTwoDigitString(Math.floor(time / 60 % 60));
  };
  const toTwoDigitString = (number) => {
    return number.toString().length == 2 ? number : '0' + number;
  };
  return { toHoursString, toMinutesString, toTwoDigitString }
}