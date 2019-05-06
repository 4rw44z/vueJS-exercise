<template>
  <div class="layout layout-column card-Container subcard-Column">
    <ul class="layout skill-list">
      <li class="layout sub-column-container" v-for="(item,index) in skillList" :key="index">
        <i :class="item.icon"></i>
        <p class="subcolumn-card-text">{{ item.skillName }}</p>
        <p class="small-column-text">{{ item.skillLevel }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: "skillsData",
    props:["skillList"]
};
</script>
