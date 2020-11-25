<template>
  <div id="overlay">
    <div class="close" @click.stop="toggleCollapse">➖</div>
    <div id="timer" v-if="!collapsed">
      <div>{{timer.timeout}}</div>

      <button @click="startTimer" v-if="timer.pause">Start timer</button>
      <button @click="pauseTimer" v-else>Pause timer</button>
    </div>
  </div>
</template>
<script>
import toggleCollapse from './toggleCollapse.mixin'
import timeFormat from './timeFormat.mixin'
import { reactive, watch, toRefs } from 'vue'

export default {
  setup(props) {
    const { time } = toRefs(props);
    const timer = reactive({
      timeout: 600,
      pause: true,
      timer: 0
    });

    const startTimer = () => {
      timer.pause = false;
      timer.timer = setInterval(() => {
        if (timer.timeout > 0) {
          timer.timeout--
        } else {
          pauseTimer()
        }
      }, 1000);
    };
    const pauseTimer = () => {
      timer.pause = true;
      clearTimeout(timer.timer);
    };

    watch(time, (newTime) => {
      pauseTimer();
      timer.timeout = newTime;
    });

    return {
      time,
      timer,
      startTimer,
      pauseTimer
    };
  },
  props: {
    time: Number
  },
  computed: {
    formatedTimeout() {
      return `${this.toHoursString(this.timeout)}:${this.toMinutesString(this.timeout)}:${this.toTwoDigitString(this.timeout % 60)}`;
    }
  },
  mixins: [toggleCollapse, timeFormat],
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