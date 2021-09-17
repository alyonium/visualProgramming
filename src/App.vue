<template>
  <div class="container">
    <router-link to="/" id="home-button">🏠</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: #e8eaf6;
  overflow: hidden;
}

a {
  text-decoration: none;
  font-size: 28px;
  &:hover {
    color: #b39ddb;
    transition: 1s;
  }
}

li {
  list-style: none;
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
  color: #2c3e50;
}

#home-button {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
