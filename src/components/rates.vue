<template>
    <div>
        <template v-for="(ratesData, abc) in Ratesrender">
            <cardLayout :key='abc' :headerclassIcon="ratesData.headerclassIcon" :headerTagline="ratesData.headerTagline">
        <div class="card-Container">
            <avatar v-for="(item,index) in ratesData.cardData" :key="index" :cardData="item"/>
        </div>
    </cardLayout>
        </template>
    </div>
</template>
<script>
import cardLayout from './cardLayout/cardMainLayout.vue'
import avatar from './cardsdata/avatar.vue'
export default {
    name: "Rates",
    components:{
        cardLayout,
        avatar
    },
    computed:{
        Ratesrender(){
            return this.$store.state.Rates
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/listitems'
</style>
