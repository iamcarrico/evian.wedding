<template>
  <div class="m-menu-item">
    <router-link :to="link">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: [
    'link'
  ],
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style lang="scss">
.m-menu-item {

}
</style>
