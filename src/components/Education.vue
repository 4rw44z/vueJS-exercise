<template>
  <div>
    <template v-for="(educationData, abc) in EducationRender">
      <cardLayout :headerclassIcon="educationData.headerclassIcon" :headerTagline="educationData.headerTagline" :key='abc'>
    <div class="card-Container">
      <avatar v-for="(item,index) in educationData.cardData" :key="index" :cardData="item"/>
    </div>
     <Footer v-slot:Footer :cardFooterText="educationData.cardFooterText"></Footer>
    </cardLayout>
    </template>
  </div>
</template>
<script>
import cardLayout from './cardLayout/cardMainLayout.vue'
import avatar from './cardsdata/avatar.vue'
import Footer from './cardLayout/footer.vue'
export default {
  name: "Education",
  components: {
    cardLayout,
    avatar,
    Footer
  },
  computed:{
    EducationRender(){
      return this.$store.state.Education
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/listitems'
</style>
