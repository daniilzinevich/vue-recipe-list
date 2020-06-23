<template>
  <div id="overlay">
    <div class="close" @click.stop="toggleCollapse">➖</div>
    <div id="timer" v-if="!collapsed">
      <div>{{formatedTimeout}}</div>

      <button @click="startTimer" v-if="pause">Start timer</button>
      <button @click="pauseTimer" v-else>Pause timer</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeout: 600,
      pause: true,
      timer: 0,
      collapsed: false
    };
  },
  props: {
    time: Number
  },
  watch: {
    time(value) {
      this.pauseTimer();
      this.timeout = value;
    }
  },
  computed: {
    formatedTimeout() {
      return `${this.toHoursString(this.timeout)}:${this.toMinutesString(this.timeout)}:${this.toTwoDigitString(this.timeout % 60)}`;
    }
  },
  methods: {
    startTimer() {
      this.pause = false;
      this.timer = setInterval(() => {
        if (this.timeout > 0) {
          this.timeout--
        } else {
          clearTimeout(this.timer)
        }
      }, 1000);
    },
    pauseTimer() {
      this.pause = true;
      clearTimeout(this.timer);
    },
    toHoursString(time) {
      return this.toTwoDigitString(Math.floor(time / 3600));
    },
    toMinutesString(time) {
      return this.toTwoDigitString(Math.floor(time / 60 % 60));
    },
    toTwoDigitString(number) {
      return number.toString().length == 2 ? number : '0' + number;
    },
    toggleCollapse() {
      console.log('toggle collapse')
      this.collapsed = !this.collapsed;
    }
  }
};
</script>
<style>
  #overlay {
    position: fixed;
    right: 1em;
    top: 60px;
    z-index: 2;
  }
  #overlay .close {
    right: 1em;
    z-index: 3;
  }

  #timer {
    background-image: url('~@/assets/tomato.png');
    text-transform: uppercase;
    position: relative;
    width: 216px;
    height: 60px;
    right: 1em;
    top: 0;
    text-align: center;
    color: #fcfef0;
    padding: 60px 0;
  }

  #timer div {
    font-size: 2em;
    padding-bottom: 10px;
  }
  
  #timer button {
    color: white;
    text-transform: uppercase;
    background-color: green;
    border: green solid 3px;
    border-radius: 2em;
    font: inherit;
    padding: 0.35em 1em;
  }

  #timer button:focus {
    outline: none;
    background-color: darkgreen;
  }
</style>