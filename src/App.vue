<template>
  <div id="app">
    <header class="m-header">
      <menu-item link="see">See</menu-item>
      <menu-item link="hear">Hear</menu-item>
      <menu-item link="home">
        <logo></logo>
      </menu-item>
      <menu-item link="read">Read</menu-item>
      <menu-item link="watch">Watch</menu-item>
    </header>
    <main>

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Logo from './components/Logo'
import MenuItem from './components/MenuItem'

export default {
  name: 'app',
  components: {
    'logo': Logo,
    'menu-item': MenuItem
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Futura PT',  Helvetica, Arial, "Nimbus Sans L", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.m-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > {
    display: flex;
    align-items: flex-start;

  }
}
</style>
