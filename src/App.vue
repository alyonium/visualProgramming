<template>
  <div class="container">
    <router-link to="/" class="home">🏠</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #e8eaf6;
}
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  overflow: hidden;
  color: #2c3e50;
}

.router-link-exact-active {
  color: #42b983;
}

.home {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
