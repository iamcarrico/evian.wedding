<template>
  <div class="l-hear">
    <h1>Listen to the playlist</h1>
    <p>
      We have compiled the songs that played during the reception. We want to thank Jacob from <a href="https://goldlineentertainment.net/">Goldline Entertainment</a> for putting together this playlist for us.
    </p>
    <p>
      Our first dance was to Cheeck to Cheeck by Ella Fitzgerald, and our last song of the evening was At Last by Etta James. Both of these songs hold a special place in our hearts.
    </p>
    <spotify></spotify>
    <p>
      If you do not have Spotify, you can also listen to this playlist on <a href="https://itunes.apple.com/us/playlist/evian-wedding-playlist/pl.u-lrdeFJZYgo">Apple Music</a>.
    </p>
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
  max-width: 560px;
  margin: 0 auto;
}

</style>
