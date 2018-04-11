<template>
  <div :class="classesToAdd">
    <router-link :to="link" :exact="exact">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: [
    'link',
    'exact'
  ],
  computed: {
    /**
     * We want to add on dynamic classes to our links.
     */
    classesToAdd () {
      let mainClass = 'm-menu-item'
      let classesToAdd = [
        mainClass,
        `${mainClass}--${this.link.replace('/', '')}`
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
  text-transform: lowercase;
  font-size: 1.25em;

  &--home {
    // The logo should be large and on top for small screens.
    @media (max-width: 663px) {
      order: -1;
      width: 100%;
    }
  }

  // We do not need spacing on the logo, it is big enough.
  &:not(&--home) {
    margin: 0 .75em;
    padding: .25em;

    .router-link-active {
      border-bottom: 2px solid $lt-grey;
      display: inline-block;
      text-shadow:
        2px 2px $black,
        2px -2px $black,
        -2px 2px $black,
        -2px -2px $black;
    }
  }

  a {
    text-decoration: none;
  }

}
</style>
