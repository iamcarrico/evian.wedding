<template>
  <div class="m-vows">
    <strong>{{ from }}'s vows to…</strong>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vows',
  props: [
    'from'
  ]
}
</script>

<style lang="scss">

</style>
