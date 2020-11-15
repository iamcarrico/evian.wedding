<template>
  <img class="m-photo"
      :src="imageSrc" @click="openPhotoSwipe">
</template>

<script>

export default {
  name: 'photo',
  computed: {
    // a computed getter
    imageSrc: function () {
      return `https://static.evian.wedding/static/photos/thumb/evian-${this.photo.id}.jpg`
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
  width: 33%;
  height: auto;
  padding: .25em;

  @media (min-width: 850px) {
    flex: 25%;
    max-width: 25%;
  }
}

</style>
