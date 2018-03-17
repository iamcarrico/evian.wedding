<template>
  <div class="l-read">
    <h1>Our Vows</h1>
    <p>We spent several months of discussing, writing, re-writing, and editing our vows. We wanted them to be meaningful not just to our relationship, but to our individuals strengths and needs. We find them to be important not just to ourselves, but to have our friends hold us accountable to these vows to each other.</p>
    <vows from="Ian">
      <vow>listen before speaking</vow>
      <vow>patient with your needs</vow>
      <vow>acknowledge when I am wrong</vow>
      <vow>be open and honest with my feelings, my desires, and my hopes</vow>
      <vow>take ownership of my actions</vow>
      <vow>be ready and open to the changes to come in our lives</vow>
      <vow>always be true and honest through the easy and difficult times</vow>
      <vow>never give up on us, or our future</vow>
      <vow>love you completely and fully</vow>
    </vows>

    <vows from="Evan">
      <vow>stand by you and support you through the good and the bad</vow>
      <vow>grow with you in our life together</vow>
      <vow>comfort you when you cry and laugh with you when you are happy</vow>
      <vow>hold you up when you are weak and to lean on you when I need help</vow>
      <vow>communicate openly with you</vow>
      <vow>respect, honor, and cherish you.</vow>
      <vow>complement your life with mine</vow>
    </vows>
  </div>
</template>

<script>
import Vows from './Vows'
import Vow from './Vow'

export default {
  name: 'read',
  components: {
    'vows': Vows,
    'vow': Vow
  }
}
</script>

<style lang="scss">
.l-read {
  max-width: 470px;
  margin: 0 auto;
}

</style>
