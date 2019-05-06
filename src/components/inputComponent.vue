<template>
  <div>
    <template v-for="(inputData,abc) in inputCardComponentRender">
      <cardLayout :key="abc" :headerTagline="inputData.headerTagline">
        <div class="card-Container">
          <div id="update-box">
            <input type="text" ref="name">
          </div>
        </div>
        <!-- Custom Event invoked using btnClick -->
        <Footer v-slot:Footer :cardFooterButton="inputData.cardFooterButton" @btnClick="update()"></Footer>
      </cardLayout>
    </template>
  </div>
</template>
<script>
import cardLayout from "./cardLayout/cardMainLayout.vue";
import Footer from "./cardLayout/footer.vue";
export default {
  name: "inputComponent",
  components: {
    cardLayout,
    Footer
  },
  
  computed: {
    inputCardComponentRender() {
      return this.$store.state.InputComponent;
    },
    userData() {
      let name = this.$store.state.UserInfo;
      console.log(name);
      return name;
    
    }
  },
  created(){
      this.$store.dispatch('getUserInfo');
  },
  methods: {
    update() {
    //   this.$store.commit("changeName", this.$refs.name[0].value);
    this.$store.dispatch('changeName', this.$refs.name[0].value);
    }
  }
};
</script>
<style lang="stylus" scoped>
#update-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
}
</style>
