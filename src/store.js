import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skiData: [],
    maxValue: 200,
    minValue: 140,
    height: 0,
    amountOfResults: 0,
    steps: [
      {
        target: '#v-step-1',
        header: {
          title: 'Enter your height.',
        },
        content:
          'Enter your FIS-height measurement between 140-200 for correct ski lengths suitable for FIS competitions.',
        params: {
          placement: 'bottom',
        },
      },
      {
        target: '#v-step-2',
        header: {
          title: 'Select amount of results.',
        },
        content: 'Amount of results can be selected between 1-25. They appear in descending order.',
        params: {
          placement: 'bottom',
        },
      },
      {
        target: '#v-step-3',
        header: {
          title: 'Calculate the results.',
        },
        content: `Ski lengths and weights for respective skis will be calculated based on the formula exposed in official FIS documents. <strong>Ski lengths and weights will appear below.</strong>`,
        params: {
          placement: 'bottom',
        },
      },
    ],
  },
  getters: {
    skiData: (state) => state.skiData,
    steps: (state) => state.steps,
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
            weight: 0,
          };
          dataBundle.skiLength = ((h * userData.height) / 100).toFixed(0);
          dataBundle.weight = ((bmi * userData.height ** 2) / 10000).toFixed(1);

          skiData.push(dataBundle);

          h -= 0.5;
          bmi -= 0.125;
        }
        state.skiData = skiData;
      } else {
        alert('Please enter height between 140-200');
      }
    },
    RESET_STATE(state, value) {
      state.skiData = value;
    },
  },
  actions: {
    calculateData({ commit }, userData) {
      const newUserData = {
        height: parseInt(userData.height),
        amountOfResults: parseInt(userData.amountOfResults),
      };
      commit('CALCULATE_DATA', newUserData);
    },
  },
});
