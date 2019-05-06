<template>
  <aside class="side-nav layout">
    <div class="profile-info">
      <img class="profile-avatar" src="./media/profile.jpg" alt="profile">
      
        <h4 class="profile-name">
        {{ userReader.profileUsername}}
        </h4>
      <h6 class="profile-name-caption">{{userReader.profileUserCompany}}</h6>
    
    </div>
    <nav>
      <ul class="profile-controls" v-for="(nav, index ) in Object.keys(navList)" :key="index">
        <li class="aside-text" v-for="(comp, key) in navList[nav]" :key="key" >
          <a href="#">
            <i :class="comp.icon"></i>
            {{ comp.title }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      navList:{
          
              component1: [
                  { icon: "fas fa-search icon", title: "Find Consultants" },
                  { icon: "fas fa-address-book icon", title: "My Consultants" },
                  { icon: "fas fa-address-card icon", title: "Talent Cloud" }
              ],
              componen2: [
                   { icon: "far fa-comment-alt icon",title: "FAQ" },
                   { icon: "fas fa-cogs icon", title: "Settings" },
                   { icon: "fas fa-power-off icon", title: "Logout"}
                   ]
      }
    };
  },
  computed: {
    userReader() {
     return this.$store.state.UserInfo;
    },
    
  }
};
</script>
<style lang="stylus" scoped>
// @import '~styles/aside';
</style>
