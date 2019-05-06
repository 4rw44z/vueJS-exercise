import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserInfo:{}, 
             
        workExpirience: [
            { headerclassIcon: "fas fa-align-justify card-icon-header" ,
             headerTagline: 'Work Expirience',
                cardData: [
                    { icon: 'fas fa-suitcase subCard-icon', tagline: 'Software Developer', SubText: 'Connected Cars A/C', SubText2: 'july 2017-Present . 1yr 2mos' },
                    { icon: 'fas fa-suitcase subCard-icon', tagline: 'Software Developer', SubText: 'Danske Back', SubText2: 'jan 2016 - Oct 2015 . 1yr 6mos' },
                    { icon: 'fas fa-suitcase subCard-icon', tagline: 'Software Developer', SubText: 'Danske Back', SubText2: 'jan 2016 - Oct 2015 . 1yr 6mos' },
                    { icon: 'fas fa-suitcase subCard-icon', tagline: 'Software Developer', SubText: 'Danske Back', SubText2: 'jan 2016 - Oct 2015 . 1yr 6mos' }
                ]
            ,
            cardFooterText: "See More Details" }

        ],
        Education: [
            { headerclassIcon: "fas fa-university card-icon-header",
             headerTagline: "Education" ,
            cardFooterText: 'View all' ,
            
                cardData: [
                    {
                        icon: "fas fa-user-graduate subCard-icon",
                        tagline: "Software Engineering",
                        SubText: "Masters Degree",
                        SubText2: "ITU",
                        SubText3: "2002 - 2005 . 3yrs"
                    },
                    {
                        icon: "fas fa-user-graduate subCard-icon",
                        tagline: "Computer Science",
                        SubText: "Masters Degree",
                        SubText2: "GTU",
                        SubText3: "2002 - 2005 . 3yrs"
                    }
                ]
            
            }
        ],
        Certification: [
            { headerclassIcon: "fas fa-certificate card-icon-header" ,
             headerTagline: 'Certifications' ,
            
                cardData: [
                    { icon: 'fas fa-certificate subCard-icon', tagline: 'Microsoft', SubText: 'Telekensoic Institute', SubText2: '2312412245', SubText3: 'Jun 2006 - Jun 2009' },
                    { icon: 'fas fa-certificate subCard-icon', tagline: 'Oracle', SubText: 'Oracle', SubText2: '2312412245', SubText3: 'Jun 2006 - Does Not Expire' }
                ]
            }
        ],
        Availability: [
            { headerclassIcon: "fas fa-headset card-icon-header" ,
             headerTagline: "Interview And Hiring" ,
             headerIconRight: "far fa-star card-icon-right" ,
             mainText: "Availability" ,
             subText: "Carl is Available from" ,
             buttonData: 'May 1 2019' ,
             cardFooterButton: "Request Interview" }

        ],
        Rates: [
            { headerclassIcon: "fas fa-money-bill-alt card-icon-header" ,
             headerTagline: "Rates" ,
            
                cardData: [
                    { icon: "fas fa-coins subCard-icon", tagline: "DKK 1,200", SubText: '3 - 7 Weeks' },
                    { icon: "fas fa-coins subCard-icon", tagline: "DKK 1000", SubText: '2 - 6 Months' },
                    { icon: "fas fa-coins subCard-icon", tagline: "DKK 700", SubText: '+6 Months' },
                ]
            }
        ],
        Skills: [
            { headerclassIcon: "fas fa-wrench card-icon-header",
              headerTagline: "Skills",
            
                skillList:[
                    {icon:"fas fa-check subcolumn-icon",
                     skillName:"Python",
                     skillLevel:"Expert"
                    },
                    {icon:"fas fa-check subcolumn-icon",
                     skillName:"JavaScript",
                     skillLevel:"Expert"
                    },
                    {icon:"fas fa-check subcolumn-icon",
                     skillName:"Angular",
                     skillLevel:"Expert"
                    },
                    {icon:"fas fa-check subcolumn-icon",
                     skillName:"Ruby",
                     skillLevel:"Expert"
                    },
                    {icon:"fas fa-check subcolumn-icon",
                     skillName:"C#",
                     skillLevel:"Proficient"
                    }
                ]
            }
        ],
        InputComponent:[
            {headerTagline: "Update Data",
            cardFooterButton: "Update Name"
            }
        ]
    },
    // getters:{
    //     profileInfoName(state){
    //         return $store.userInfo
    //     }
    // },
    mutations:{
        changeName(state, username){
            // state.UserInfo.profileUsername = newname;
            state.UserInfo.profileUsername = username;

        },
        UPDATE_USER_INFO(state, userInfo){
            state.UserInfo=userInfo

        }
    },
    actions:{
        getUserInfo(context){
            const userData = {  profileUsername: "Carl Connors" ,
            profileUserCompany: "Google Inc" };
            context.commit('UPDATE_USER_INFO', userData);
        },
        changeName(context, username){
            context.commit('changeName', username);
    
    }
    }
})
