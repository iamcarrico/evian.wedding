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
  flex-wrap: wrap;
  align-items: center;
}

</style>
