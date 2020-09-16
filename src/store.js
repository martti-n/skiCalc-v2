import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getLocalStorage = () => {
  const items = window.localStorage.getItem('searches');
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

export default new Vuex.Store({
  state: {
    selectedSearchOption: {},
    searchOptions: [],
    skiData: [],
    values: {
      maxValue: 200,
      minValue: 140,
    },
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
    searchOptions: (state) => state.searchOptions,
    selectedSearchOption: (state) => state.selectedSearchOption,
    values: (state) => state.values,
  },
  mutations: {
    CALCULATE_DATA(state, userData) {
      let skiData = [];

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
    },
    RESET_STATE(state, value) {
      state.skiData = value;
    },
    STORE_SEARCH_OPTIONS(state, value) {
      state.searchOptions.push(value);
      if (state.searchOptions.length > 3) {
        state.searchOptions.shift();
        window.localStorage.removeItem('searches');
      }
      window.localStorage.setItem('searches', JSON.stringify(state.searchOptions));
    },
    SELECT_SEARCH_OPTION(state, option) {
      state.selectedSearchOption = option;
    },
    SET_SEARCH_ITEMS(state) {
      state.searchOptions = getLocalStorage();
    },
  },
  actions: {
    calculateData({ commit }, userData) {
      const newUserData = {
        height: parseInt(userData.height),
        amountOfResults: parseInt(userData.amountOfResults),
      };
      commit('STORE_SEARCH_OPTIONS', newUserData);
      commit('CALCULATE_DATA', newUserData);
    },
  },
});
