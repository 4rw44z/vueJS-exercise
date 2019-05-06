<template>
<div class="card">
  <cardheader :headerclassIcon="headerclassIcon" :headerTagline="headerTagline" :headerIconRight="headerIconRight"/>
  <!-- <avatar :cardData="cardData"/> -->
  <slot></slot>
  <slot name="Footer">
  </slot>
</div>
</template>
<script>
import avatar from '../cardsdata/avatar.vue';
import cardheader from './cardHeaderComponent.vue';
import Footer from "./footer.vue";
export default {
  name: "cardLayout",
  components:{
    cardheader,
    avatar,
    Footer
  },
  props:['cardData', 'headerclassIcon', 'headerTagline','headerIconRight',"cardFooterText","cardFooterButton"]
}
</script>
<style lang="stylus" scoped>
</style>
