<template>
  <div class="l-see">
    <sub-menu>
      <menu-item link="/see">Official Photos</menu-item>
      <menu-item link="/see/instagram">Instagram</menu-item>
    </sub-menu>
    <h1>The photos</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Photos from './Photos'
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'

export default {
  name: 'see',
  components: {
    'photos': Photos,
    'sub-menu': SubMenu,
    'menu-item': MenuItem
  }
}
</script>

<style lang="scss">
.l-see {
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 900px) {

    max-width: 85%;
  }
}
</style>
