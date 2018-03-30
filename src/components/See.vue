<template>
  <div class="l-see">
    <h1>The photos</h1>
    <photos></photos>
  </div>
</template>

<script>
import Photos from './Photos'

export default {
  name: 'see',
  components: {
    'photos': Photos
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
