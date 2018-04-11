<template>
  <div class="l-read">
    <sub-menu>
      <menu-item link="/read" exact>Our Vows</menu-item>
      <menu-item link="/read/phil" exact>Phil's Reading</menu-item>
    </sub-menu>

    <router-view></router-view>
  </div>
</template>

<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'

export default {
  name: 'read',
  components: {
    'sub-menu': SubMenu,
    'menu-item': MenuItem
  }
}
</script>

<style lang="scss">
.l-read {
  max-width: 470px;
  margin: 0 auto;
}

</style>
