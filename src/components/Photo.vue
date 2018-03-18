<template>
  <div class="m-photo">
    <img class="m-photos--photo"
        :src="imageSrc" @click="openPhotoSwipe">
  </div>
</template>

<script>

export default {
  name: 'photo',
  computed: {
    // a computed getter
    imageSrc: function () {
      return `/static/photos/thumbs/evian-${this.photo.id}.jpg`
    }
  },
  methods: {
    openPhotoSwipe: function () {
      this.$emit('clickPhoto', {index: this.index})
    }
  },
  props: [
    'photo',
    'index'
  ]
}
</script>

<style lang="scss">
.m-photo {

}

</style>
