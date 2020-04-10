import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        skiData: [],
        maxValue: 200,
        minValue: 140,
        height: 0,
        amountOfResults: 0
    },
    mutations: {
        CALCULATE_DATA(state, userData) {
            let skiData = [];
            
            if (userData.height <= state.maxValue && userData.height >= state.minValue) {
                
                let h = 145;
                let bmi = 21;
                for (let i = 0; i < userData.amountOfResults; i++) {
                    const dataBundle = {
                        skiLength: 0,
                        weight: 0
                    }
                    dataBundle.skiLength= (h * userData.height / 100).toFixed(0)
                    dataBundle.weight = (bmi * userData.height ** 2 / 10000).toFixed(1)

                    skiData.push(dataBundle)

                    h -= 0.5
                    bmi -= 0.125
                }
                state.skiData = skiData;
            } else {
                alert("Please enter height between 140-200 \n AND select amount of results!")
            }
            
        }
    },
    actions: {
        calculateData({commit}, userData) {
            
            const newUserData = {
                height: parseInt(userData.height),
                amountOfResults: parseInt(userData.amountOfResults)
            }
            commit('CALCULATE_DATA', newUserData)
        }

    },
    getters: {
        skiData(state) {
            return state.skiData
        },
        
    }
})