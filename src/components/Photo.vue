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
      return `/static/photos/thumb/evian-${this.photo.id}.jpg`
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
  flex: 24%;
  max-width: 24%;
  padding: .25em;
  overflow: hidden;
  max-height: 300px;
}

</style>
