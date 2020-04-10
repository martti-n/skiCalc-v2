<template>
  <div id="app">
    <TopHeader />
    <item />
  </div>
</template>

<script>
import item from './components/item'
import TopHeader from './components/top-header.vue'

export default {
  name: 'App',
  components: {
    TopHeader,
    item
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
    background-color: #192734;
}

html {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #f3f3f3;
    
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

.input {
    text-align: center;
    margin-top: 10px;
}

.input input {
    height: 25px;
    font-size: 20px;
    width: 140px;
    text-align: center;
    background-color: #15202b;
    border: solid 1px;
    color: #ffffff;
    outline: none;
}

.radioButtons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.radioButtons div {
    display: flex;
    justify-content: start;
    margin: 10px;
}

.radioButtons div label {
    margin-left: 5px;
}

.radioButtons input {
    margin-top: 2px;
}

.btn1 {
    display: block;
    width: 120px;
    height: 30px;
    margin: 10px auto;
    border:solid rgb(255, 255, 255) 1px;
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
