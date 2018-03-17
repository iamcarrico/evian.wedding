<template>
  <div class="l-watch">
    <h1>Our enagement video</h1>
    <p>Evan's father, Sean, put together this amazing video for our rehearsal dinner. We feel so blessed to have such an amazing work of art of our lives coming together</p>
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
