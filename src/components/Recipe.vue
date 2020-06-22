<template>
  <div>
    <timer
      v-if="!complete"
      :time="nextTimer"
    />
    <h1>
      Простой и вкусный рецепт <strong>Пиццы</strong>
    </h1>
    <part
      v-for="(part, index) in parts"
      :key="part.title"
      :title="part.title"
      :description="part.description"
      :complete="part.complete"
      @click="handleClick(index)"
    />
    <p v-if="!complete">{{totalSteps}} из {{parts.length}} готово</p>
    <p v-else>Вуаля</p>
  </div>
</template>
<script>
import RecipePart from './RecipePart';
import Timer from './Timer';

export default {
  data() {
    return {
      parts: [
        {
          title: 'Подготовить тесто',
          description: 'Смешать тесто и раскатать на противне, поставить в духовку заранее разргретую до максимума. Подержать 10 минут пока тесто не станет слегка твердоватым.',
          time: 600
        },
        {
          title: 'Подготовить основу',
          description: 'Eсть два варианта: <ol> <li>Взять кетчуп, барбекю, горчцу, перец и базилик, все перемешать;</li> <li>Обжарить лук и Чеснок, добавить туда томатную пасту и базилик.</li> </ol>'
        },
        {
          title: 'Сделать начинку',
          description: 'Смазываешь тесто основой, посыпаешь натертой моцареллой (можно добавить любой другой сыр). Сверху кладёшь тонко нарезанную колбасу, оливки, разрезанные пополам, помидорки (либо чери-порезать пополам и срезом вниз, либо в собственном соку из банки). Сверху можно добавить моцареллу.'
        },
        {
          title: 'Запечь',
          description: 'Ставишь в духовку до того, как сыр растечется и будет красота, это от 5 до 10 минут (зависит от духовки). Достаёшь, посыпаешь натертым пармезаном.',
          time: 300
        }
      ],
      nextTimer: 0
    };
  },
  methods: {
    handleClick(index) {
      this.$set(this.parts[index], 'complete', !this.parts[index].complete)
      if (index < this.parts.length && this.parts[index + 1].time) {
        this.nextTimer = this.parts[index + 1].time
      }
    }
  },
  components: { part: RecipePart, Timer },
  computed: {
    totalSteps() {
      return this.parts.reduce((count, part) => part.complete ? count + 1 : count, 0);
    },
    complete() {
      return this.parts.every(part => part.complete);
    }
  }
}
</script>
<style>
h1, h2, h3, h4, h5, h6 {
  margin: auto;
  font-size: 1.25em;
  font-weight: normal;
}

ol, ul {
  margin: auto;
}

.delimiter h2 {
  margin: auto;
  display: flex;
  width: 100%;
}
.delimiter h2:after {
  content: '';
  display: block;
  position: relative;
  margin-left: 0.5em;
  flex: 1;
  height: 1px;
  top: 0.625em;
  border-bottom: 1px solid black;
}

.delimiter p {
  margin: 0.25em 1em;
}
.delimiter {
  cursor: pointer;
  text-align: left;
  margin: 1em auto;
  max-width: 600px;
}
.delimiter.complete {
  color: #aaa;
}

.right {
  float: right;
}
</style>
