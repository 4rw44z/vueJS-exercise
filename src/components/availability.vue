<template>
    <cardLayout :headerclassIcon="headerclassIcon" :headerTagline="headerTagline" :headerIconRight="headerIconRight">
    <div class="card-Container">
        <AvailableData :mainText="mainText" :subText="subText" :buttonData="buttonData"/>
    </div>
     <Footer :cardFooterButton='cardFooterButton'></Footer>
    </cardLayout>
</template>
<script>
import cardLayout from './cardLayout/cardMainLayout.vue'
import AvailableData from './cardsdata/AvailableData.vue'
import Footer from './cardLayout/footer.vue'
export default {
    components:{
        cardLayout,
        AvailableData,
        Footer
    },
    data(){
        return{
            headerclassIcon: "fas fa-headset card-icon-header",
            headerTagline: "Interview And Hiring",
            headerIconRight:"far fa-star card-icon-right",
            mainText: "Availability",
            subText:"Carl is Available from",
            buttonData: 'May 1 2019',
            cardFooterButton: "Request Interview"
        }
    }
}
</script>