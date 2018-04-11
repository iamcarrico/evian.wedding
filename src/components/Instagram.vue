<template>
  <div class="m-instagram">
    <h2>Instagram</h2>
      <p>Check out the <a href="https://www.instagram.com/explore/tags/evianwed/" target="_blank">Instagram Feed</a> from all our friends and family. Tag your own photos, and let us know! Below are some of our favorites.</p>

      <div class="m-instagram--embeds">
        <instagram-embed instaId="BcsORjUlIzg" username="Phil Dieke (@phildieke)" time="Dec 14, 2017 at 9:26am PST"></instagram-embed>
        <instagram-embed instaId="BcgAuB8jTcq" username="Tanner Curtis (@tannercurtis)" time="Dec 9, 2017 at 3:37pm PST"></instagram-embed>
        <instagram-embed instaId="BcgWJpBD6ML" username="Kristin Hillery (@christenhillary)" time="Dec 9, 2017 at 6:44pm PST"></instagram-embed>
      </div>
  </div>
</template>

<script>
import InstagramEmbed from './InstagramEmbed'
export default {
  name: 'instagram',
  components: {
    'instagram-embed': InstagramEmbed
  }
}
</script>

<style lang="scss">
.m-instagram {
  max-width: 900px;
  margin: 0 auto;

  p {
    max-width: 500px;
    margin: 0 auto 1em;
  }

  @media (min-width: 626px) {
    &--embeds {
      display: flex;
      justify-content: center;
    }

    &-embed {
      max-width: 33%;
    }
  }


}
</style>
