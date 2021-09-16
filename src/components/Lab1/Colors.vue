<template>
  <ul>
    <li>
      <input type="checkbox" />
      <div>V</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>I</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>S</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>I</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>O</div>
    </li>
    <li>
      <input type="checkbox" />
      <div>N</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Colors',
});
</script>

<style scoped lang="scss">
ul {
  position: relative;
  display: flex;
}

li {
  list-style: none;
}

input[type='checkbox'] {
  position: relative;
  opacity: 0;
  cursor: pointer;
  height: 80px;
  width: 80px;
  z-index: 100;
}

div {
  position: relative;
  height: 80px;
  width: 80px;
  top: -80px;
  color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 54px;
  cursor: pointer;
  margin: 0 4px;
}

input[type='checkbox']:checked ~ div {
  color: #ba68c8;
  text-shadow: 0 0 3px #ba68c8;
  animation: changeColor 2s infinite;
}

@keyframes changeColor {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(100deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
}
</style>
