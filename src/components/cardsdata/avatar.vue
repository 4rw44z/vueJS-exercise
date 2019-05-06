<template>
    <div class="list-of-items">
      <i :class="cardData.icon"></i>
      <div class="items-in-list">
      <h4>{{ cardData.tagline }}</h4>
      <p>{{ cardData.SubText }}</p>
      <p>{{ cardData.SubText2 }}</p>
      <p>{{ cardData.SubText3 }}</p>
      </div>
    </div>
</template>
<script>
export default {
  name: "avatar",
  props: ["cardData"]
};
</script>
<style lang="stylus" scoped>


</style>
