<template>
  <div>
    <cardLayout :headerclassIcon="headerclassIcon" :headerTagline="headerTagline">
    <div class="card-container">
        <img class="video-thumbnail" src="./media/video-thumbnail.jpg" alt="video-thumbnail">
    </div>
    
    </cardLayout>
  </div>
</template>
<script>
import cardLayout from "./cardLayout/cardMainLayout.vue";
export default {
  components: {
    cardLayout
  },
  data() {
    return {
      headerclassIcon: "fas fa-align-justify card-icon-header",
      headerTagline: "Video Resume",
      imgSrc: "media/video-thumbnail.jpg"
    };
  }
};
</script>
