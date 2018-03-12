<template>
  <div class="l-watch">
    <youtube></youtube>
  </div>
</template>

<script>
import Youtube from './Youtube'

export default {
  name: 'watch',
  components: {
    'youtube': Youtube
  }
}
</script>

<style lang="scss">
.l-watch {
  max-width: 560px;
  margin: 0 auto;
}
</style>
