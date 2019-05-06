<template>
  <div class="layout layout-row card-header">
    <div class="layout layout-row card-header-container1">
      <i :class="headerclassIcon"></i>
      <h4 class="card-Heading-Text">{{ headerTagline }}</h4>
    </div>
    <div class="layout layout-row card-header-container2">
      <i :class="headerIconRight"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardheader",
  props: ["headerclassIcon", "headerTagline","headerIconRight"]
};
</script>
<style lang="stylus" scoped>
.card-header
    border-bottom solid 1px #eee
    
</style>