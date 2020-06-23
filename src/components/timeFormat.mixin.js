export default {
  methods: {
    toHoursString(time) {
      return this.toTwoDigitString(Math.floor(time / 3600));
    },
    toMinutesString(time) {
      return this.toTwoDigitString(Math.floor(time / 60 % 60));
    },
    toTwoDigitString(number) {
      return number.toString().length == 2 ? number : '0' + number;
    },
  }
}