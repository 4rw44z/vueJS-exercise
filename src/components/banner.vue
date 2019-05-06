<template>
  <div class="layout layout-column container-banner">
    <a href="#">
      <i class="fas fa-arrow-left icon"></i> Back to find the Consultants
    </a>
    <div class="profile-header layout layout-row">
      <img class="profile-image" src="./media/Profile.jpg" alt="profile-image">
      <div class="profile-banner-info">
        <h4 class="profile-banner-info-heading" >{{ userInfoName.profileUsername}}</h4>
        <p class="profile-banner-info-subheading">{{ userSkills }}</p>
        <p class="small-text">{{ userLocation }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    userInfoName() {
    return this.$store.state.UserInfo;
    },
    userSkills() {
      return "Backend Architect/ Project Leader/ Product Manager";
    },
    userLocation() {
      return "CopenHagen, Denmark";
    }
  }
};
</script>
<style lang="stylus" scoped>
// @import '~styles/banner';
</style>
