<template>
  <div id="app">
    <TopHeader />
    <Item />
  </div>
</template>

<script>
import Item from './components/item'
import TopHeader from './components/top-header.vue'

export default {
  name: 'App',
  components: {
    TopHeader,
    Item
  },
  methods: {
    
  }
}
</script>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(25, 39, 52);
}

html {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #f3f3f3;
    
}

</style>
