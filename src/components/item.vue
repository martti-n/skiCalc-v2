<template>
  <div class="item">
        <div v-for="item in $store.state.skiData" :key="item.id" class="row">
            <div class="col-1">
                <p>{{item.skiLength}} --- {{item.weight}}</p>
                
            </div>
        </div>
  </div>      
</template>

<script>
export default {
  computed: {
    skiData() {
      return this.$store.getters.skiData
    }
  }
}
</script>

<style scoped>
 .item {
   width: 33%;
   margin: 0 auto;
   margin-top: 20px;
 }

 .row {
   width: 100px;
   height: 30px;
   display: flex;
   justify-content: center;
   align-content: center;
   padding-top: 6px;
   margin: 3px auto;
   background: #15202b;
   transition: transform 0.5s, background 0.5s, color 0.5s;
 }

 .row:hover,
 .row:active {
   background: #f3f3f3;
   color: black;
   transform: scale(1.2);
   cursor: pointer;
 }
</style>
