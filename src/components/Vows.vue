<template>
  <div class="m-vows">
    <h2>{{ from }} vows to…</h2>
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

.m-vows {
  margin-bottom: 1em;

  h2 {
    font-style: italic;
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    width: 350px;
    text-indent: -1em;

    li {
      margin-bottom: .5em;
    }

    @media (min-width: 585px) {
      width: 550px;

      li {
        margin-bottom: .25em;
      }
    }

  }
}

</style>
