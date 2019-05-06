<template>
    <div>
        <template v-for="(certificationData, abc) in CertificationsRender">
            <cardLayout :key="abc" :headerclassIcon="certificationData.headerclassIcon" :headerTagline="certificationData.headerTagline">
        <div class="card-container">
            <avatar v-for="(item,index) in certificationData.cardData" :key="index" :cardData="item" />
        </div>
    </cardLayout>
        </template>
    </div>
</template>
<script>
import cardLayout from "./cardLayout/cardMainLayout.vue"
import avatar from "./cardsdata/avatar.vue"
export default {
    name: "Certifications",
    components:{
        cardLayout,
        avatar
    },
    computed:{
        CertificationsRender(){
            return this.$store.state.Certification
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/listitems'
</style>
