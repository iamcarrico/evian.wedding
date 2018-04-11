<template>
  <div class="m-sub-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sub-menu'
}
</script>

<style lang="scss">
.m-sub-menu {
  display: flex;
  justify-content: center;

  .m-menu-item {

  }
}
</style>
