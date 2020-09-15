<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
};
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

.v-step__content {
  font-weight: 400;
}
</style>
