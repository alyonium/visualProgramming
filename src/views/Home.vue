<template>
  <h1>visual programming labs</h1>
  <ul>
    <li><router-link to="/lab1">Lab1</router-link></li>
    <li><router-link to="/lab2">Lab2</router-link></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
