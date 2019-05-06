<template>
<main class="layout layout-column">
    <div class="layout layout-column">
        <banner />
    <div class="cards layout">
        <div class="card-layout layout-column card-column1">
            <workExpirience />
            <Education />
            <Certifications />
        </div>
        <div class="card-layout layout-column card-column2">
            <VideoResume />
            <Availability />
            <Rates />
            <Skills />
            <inputComponent />
        </div>
    </div>
    </div>
</main>
</template>
<script>
import banner from '../components/banner'
import workExpirience from '../components/workExpirience.vue'
import Education from '../components/Education.vue'
import Certifications from '../components/Certifications.vue'
import VideoResume from '../components/videoResume.vue'
import Rates from '../components/rates.vue'
import Availability from '../components/availability.vue'
import Skills from "../components/skills.vue"
import inputComponent from "../components/inputComponent.vue"
export default {
    name : "Default",
    components:{
        banner,
        workExpirience,
        Education,
        Certifications,
        VideoResume,
        Rates,
        Availability,
        Skills,
        inputComponent

    }
}
</script>
<style lang="stylus">
.cards
    margin-top: -38px
</style>
