<template>
   <div>
       <template v-for="(skillsData, abc) in skillsRender">
            <cardLayout :key="abc" :headerclassIcon="skillsData.headerclassIcon" :headerTagline="skillsData.headerTagline">
        <skillsData :skillList="skillsData.skillList" />
    </cardLayout>
       </template>
   </div>
</template>
<script>
import cardLayout from "./cardLayout/cardMainLayout.vue"
import skillsData from "./cardsData/skillsData.vue"
export default {
    name:"Skills",
    components:{
        cardLayout,
        skillsData
    },
    computed:{
        skillsRender(){
            return this.$store.state.Skills
        }
    }
}
</script>

<style>

</style>
