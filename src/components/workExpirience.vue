<template>
  <div>
    <template v-for="(workData,abc) in WorkExpirienceReader">
      <cardLayout
        :key="abc"
        :headerclassIcon="workData.headerclassIcon"
        :headerTagline="workData.headerTagline"
      >
        <div class="card-Container">
          <avatar
            v-for="(item,index) in workData.cardData"
            :key="index"
            :cardData="item"
            :items-in-list="'items-in-list'"
          ></avatar>
        </div>
        <Footer v-slot:Footer :cardFooterText="workData.cardFooterText"></Footer>
      </cardLayout>
    </template>
  </div>
</template>
<script>
import cardLayout from "./cardLayout/cardMainLayout.vue";
import avatar from "./cardsdata/avatar.vue";
import Footer from "./cardLayout/footer.vue";
export default {
  name: "workExpirience",
  components: {
    cardLayout,
    avatar,
    Footer
  },
  computed: {
    WorkExpirienceReader() {
      return this.$store.state.workExpirience;
    }
  }
};
</script>
<style lang="stylus" scoped></style>
