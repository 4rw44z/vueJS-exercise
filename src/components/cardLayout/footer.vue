<template>
  <footer class="layout layout-row card-footer">
    <button class="footer-text" v-if="cardFooterText">{{ cardFooterText }}</button>
    <button type="button" class="footer-button" v-if="cardFooterButton" @click="handleClickEvents()">{{ cardFooterButton }}</button>
  </footer>
</template>
<script>
export default {
    name:"Footer",
    props: ["cardFooterText", "cardFooterButton", "btnClick"],
    methods:{
      handleClickEvents(){
        this.$emit("btnClick") // Custom Event Created
      }
    }
};
</script>
<style lang="stylus" scoped>
.card-footer
    padding-bottom 19px
</style>

