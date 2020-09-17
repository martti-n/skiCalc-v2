<template>
  <div>
    <h1>SKICALC</h1>
    <h3>Enter you FIS-height below</h3>
    <form>
      <div class="input-container">
        <input
          id="v-step-1"
          class="height-input"
          v-model="userData.height"
          type="number"
          placeholder="Your height"
          @keypress.enter.prevent="calculateResults"
        />
      </div>
      <h3>Amount of results</h3>
      <div class="center-item">
        <vue-slider v-model="userData.amountOfResults" :width="200" :max="25" :dotSize="16" id="v-step-2" />
      </div>
      <div>
        <a @click="calculateResults" id="v-step-3" class="calculate-button">CALCULATE</a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      userData: {
        height: '',
        amountOfResults: 10,
      },
    };
  },
  watch: {
    selectedSearchOption() {
      if (this.selectedSearchOption.height) {
        this.userData.height = this.selectedSearchOption.height;
        this.userData.amountOfResults = this.selectedSearchOption.amountOfResults;
        this.$emit('calculate');
      }
    },
  },
  computed: {
    ...mapGetters({
      selectedSearchOption: 'selectedSearchOption',
      values: 'values',
    }),
  },
  methods: {
    calculateResults() {
      this.$store.commit('RESET_STATE', []);
      const height = parseInt(this.userData.height);
      if (height > this.values.minValue && height < this.values.maxValue) {
        this.$store.dispatch('calculateData', this.userData);
      } else {
        alert('Please enter height between 140-200');
      }
      this.$emit('calculate');
    },
  },
};
</script>

<style lang="scss" scoped>
.center-item {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
h1,
h3 {
  text-align: center;
  width: 100%;
  margin-top: 15px;
}

h3 {
  font-weight: 500;
  letter-spacing: 1px;
}
.input-container {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.height-input {
  height: 42px;
  font-size: 20px;
  border-radius: 10px;
  width: auto;
  text-align: center;
  background-color: #15202b;
  border: none;
  color: #ffffff;
  outline: none;
  transition: all 0.3s;
  &::placeholder {
    color: #ffffff;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #ffffff;
    color: #15202b;
    &::placeholder {
      color: #15202b;
    }
  }
}

.calculate-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin: 10px auto;
  color: #ffffff;
  border-radius: 20px;
  background: #15202b;
  transition: all 0.3s;
  font-size: 95%;
  font-weight: 500;
  &:hover,
  &:active {
    background: #f3f3f3;
    color: #15202b;
    cursor: pointer;
  }
}
</style>
