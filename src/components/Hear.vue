<template>
  <div class="l-hear">
    <spotify></spotify>
  </div>
</template>

<script>
import Spotify from './Spotify'

export default {
  name: 'hear',
  components: {
    'spotify': Spotify
  }
}
</script>

<style lang="scss">

.l-hear {
  max-width: 750px;
  margin: 0 auto;
}

</style>
