<template>
  <div>
    <header class="m-header">
      <menu-item link="/see">See</menu-item>
      <menu-item link="/hear">Hear</menu-item>
      <menu-item link="home">
        <logo></logo>
      </menu-item>
      <menu-item link="/read">Read</menu-item>
      <menu-item link="/watch">Watch</menu-item>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer class="m-footer">
      We wanted to share a piece of such an important day to ourselves with the world. A <router-link to="thanks">special thanks</router-link> to our amazing <router-link to="thanks">vendors</router-link> who helped put together this day for us. This website's content is shared under the Creative Commons Attribution-ShareAlike 4.0 International (<a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>), where applicable.
    </footer>
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
.m-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1em;
}

main {
  min-height: 40vh;
}

.m-footer {
  font-size: .75em;
  max-width: 760px;
  margin: 3em auto 2em;
  text-align: center;
}
</style>
