<template>
  <div class="search-container">
    <div v-for="option in searchOptions" :key="option.id" @click="calculateAgain(option)">
      {{ option.height }}cm search
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchOptions: 'searchOptions',
    }),
  },
  methods: {
    calculateAgain(option) {
      this.$store.commit('SELECT_SEARCH_OPTION', option);
      this.$store.commit('CALCULATE_DATA', option);
    },
  },
};
</script>
