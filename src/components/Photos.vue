<template>
  <div class="m-photos">
    <photo v-for="(photo, index) in photos" :photo="photo" :index="index" :key="index" v-on:clickPhoto="onPhotoClick"></photo>
  </div>
</template>

<script>
import Photo from './Photo'
import PhotoJson from '../assets/images.json'

export default {
  name: 'photos',
  props: [
    'from'
  ],
  components: {
    'photo': Photo
  },
  methods: {
    onPhotoClick: function (data) {
      this.$photoswipe.open(data.index, this.photos)
    }
  },
  data () {
    return {
      photos: PhotoJson
    }
  }
}
</script>

<style lang="scss">
.m-photos {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto;

  align-items: center;


  @media (min-width: 900px) {

    max-width: 85%;
  }
}

</style>
