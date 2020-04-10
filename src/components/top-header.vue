<template>
  <div>
    <h1>SKICALC</h1>
    <h3>enter your fis-height below</h3>
    <form>
          <div class="input">
            <input 
              v-model="userData.height" 
              type="number" 
              placeholder = "Your height" 
              @keypress.enter.prevent ="calculateResults">
          </div>
          <div class="radioButtons">
            <div>
              <input 
                type="radio" 
                name="results" 
                value="10" 
                v-model="userData.amountOfResults">
              <label for="10">10 results</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="results" 
                value="15" 
                v-model="userData.amountOfResults">
              <label for="15">15 results</label>
            </div>
            <div>
              <input 
                type="radio" 
                name="results" 
                value="20" 
                v-model="userData.amountOfResults">
              <label for="20">20 results</label>
            </div>
          </div>
          <div>
            <button 
              type="button" 
              @click="calculateResults" 
              class ="btn1"
            >SUBMIT</button>	
          </div>
        </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        height: '',
        amountOfResults: 15
      }
    }
  },
  methods: {
    calculateResults() {
      this.$store.dispatch('calculateData', this.userData)
    }
  }

}
</script>

<style scoped>

</style>
