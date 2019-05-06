<template>
  <div class="layout layout-row subCard-Container">
    <div class="layout layout-column sub-Card-Container-Text">
      <h4 class="card-subheading-special">{{mainText}}</h4>
      <div class="layout layout-row time-availability">
        <div class="layout subcard-p-text">
          <p>{{ subText }}</p>
        </div>
        <div class="layout time-button">
          <button>{{ buttonData }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "AvailableData",
    props:["mainText", "subText", "buttonData"]
};
</script>
