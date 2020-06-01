<template>
  <div>
    <h1>
      Простой и вкусный рецепт <strong>Пиццы</strong>
    </h1>
    <div class="delimiter">
      <h2>Подготовить тесто</h2>
      <p>Смешать тесто и раскатать на противне, поставить в духовку заранее разргретую до максимума. Подержать 10 минут пока тесто не станет слегка твердоватым.</p>
    </div>
    <div class="delimiter">
      <h2>Подготовить основу</h2>
      <p>
        Eсть два варианта: <ol> <li>Взять кетчуп, барбекю, горчцу, перец и базилик, все перемешать;</li> <li>Обжарить лук и Чеснок, добавить туда томатную пасту и базилик.</li> </ol>
      </p>
    </div>
    <div class="delimiter">
      <h2>Сделать начинку</h2>
      <p>
        Смазываешь тесто основой, посыпаешь натертой моцареллой (можно добавить любой другой сыр). Сверху кладёшь тонко нарезанную колбасу, оливки, разрезанные пополам, помидорки (либо чери-порезать пополам и срезом вниз, либо в собственном соку из банки). Сверху можно добавить моцареллу.
      </p>
    </div>
    <div class="delimiter">
      <h2>Запечь</h2>
      <p>
        Ставишь в духовку до того, как сыр растечется и будет красота, это от 5 до 10 минут (зависит от духовки). Достаёшь, посыпаешь натертым пармезаном.
      </p>
    </div>
    <p>Вуаля</p>
  </div>
</template>
<script>
export default {
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
  text-align: left;
  margin: 1em auto;
  max-width: 600px;
}
</style>
