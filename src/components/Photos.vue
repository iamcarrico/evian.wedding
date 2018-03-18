<template>
  <div class="m-photos">
    <photo v-for="(photo, index) in photos" :photo="photo" :index="index" :key="index" v-on:clickPhoto="onPhotoClick"></photo>
  </div>
</template>

<script>
import Photo from './Photo'

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
      photos: [
        {
          id: 1,
          title: 'This is the text I care about',
          thumb: {
            src: '/static/photos/thumbs/evian-1.jpg',
            w: 1999,
            h: 1333
          },
          medium: {
            src: '/static/photos/medium/evian-1.jpg',
            w: 1999,
            h: 1333
          }
        },
        {
          id: 2,
          title: 'This is the text I care about',
          thumb: {
            src: '/static/photos/thumbs/evian-2.jpg',
            w: 1335,
            h: 1999
          },
          medium: {
            src: '/static/photos/medium/evian-2.jpg',
            w: 1335,
            h: 1999
          }
        },
        {
          id: 3,
          title: 'This is the text I care about',
          thumb: {
            src: '/static/photos/thumbs/evian-3.jpg',
            w: 1335,
            h: 1999
          },
          medium: {
            src: '/static/photos/medium/evian-3.jpg',
            w: 1335,
            h: 1999
          }
        },
        {
          id: 4,
          title: 'This is the text I care about',
          thumb: {
            src: '/static/photos/thumbs/evian-4.jpg',
            w: 1999,
            h: 1333
          },
          medium: {
            src: '/static/photos/medium/evian-4.jpg',
            w: 1333,
            h: 1999
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.m-photos {

}

</style>
