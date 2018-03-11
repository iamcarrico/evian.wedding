<template>
  <div :class="classesToAdd">
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
  computed: {
    /**
     * We want to add on dynamic classes to our links.
     */
    classesToAdd () {
      let mainClass = 'm-menu-item'
      let classesToAdd = [
        mainClass,
        `${mainClass}--${this.link}`
      ]

      if (this.isActive) {
        classesToAdd.push(`${mainClass}--active`)
      }

      return classesToAdd
    }
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.m-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;

  &--home {

    // The logo should be large and on top for small screens.
    @media (max-width: 600px) {
      order: -1;
      width: 100%;
    }
  }

  // We do not need spacing on the logo, it is big enough.
  &:not(&--home) {
    margin: 0 .5em;
  }

  a {
    text-decoration: none;
  }

}
</style>
