<template>
  <div>
    <h1>SKICALC</h1>
    <h3>enter your fis-height below</h3>
    <form>
      <div class="input-container">
        <input
          class="height-input"
          v-model="userData.height"
          type="number"
          placeholder="Your height"
          @keypress.enter.prevent="calculateResults"
        />
      </div>
      <div class="center-item">
        <vue-slider v-model="userData.amountOfResults" :width="200" :max="25" :dotSize="16" />
      </div>
      <div>
        <button type="button" @click="calculateResults" class="btn1">CALCULATE</button>
      </div>
    </form>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      userData: {
        height: "",
        amountOfResults: 10,
      },
    };
  },
  methods: {
    calculateResults() {
      this.$store.dispatch("calculateData", this.userData);
    },
  },
};
</script>

<style scoped>
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
  width: auto;
  text-align: center;
  background-color: #15202b;
  border: solid 1px;
  color: #ffffff;
  outline: none;
}

.btn1 {
  display: block;
  width: 120px;
  height: 30px;
  margin: 10px auto;
  border: solid rgb(255, 255, 255) 1px;
  color: #ffffff;
  background: #15202b;
  transition: background 0.3s;
  font-size: 95%;
  outline: none;
  font-weight: 500;
}

.btn1:hover,
.btn1:active {
  background: #f3f3f3;
  color: #15202b;
  cursor: pointer;
}
</style>
