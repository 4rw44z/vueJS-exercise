<template>
  <div id="app">
    <sidebar />
    <Default />
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
import Default from './pageSectionLayout/default.vue'
export default {
  name: 'app',
  components: {
    sidebar,
    Default,
  }
}
</script>
<style lang="stylus">
// @import '~styles/reset';
// @import '~styles/layout';
@import '~styles/main'
@import '~styles/listitems'
</style>
