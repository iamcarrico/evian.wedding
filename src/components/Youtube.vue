<template>
  <div class="m-youtube">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kFBKRT87Oxc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

  </div>
</template>

<script>
export default {
  name: 'youtube'
}
</script>

<style lang="scss" scoped>

.m-youtube {
  text-align: center;
  position: relative;
  padding-bottom: percentage(9/16);

  iframe {
    left: 0;
  	height: 100%;
  	position: absolute;
  	top: 0;
  	width: 100%;
    max-width: 560px;
  }

}

</style>
