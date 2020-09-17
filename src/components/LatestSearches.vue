<template>
  <div class="search-container">
    <div style="margin-bottom: 10px;">
      <span>Latest searches:</span>
    </div>
    <div v-if="searchOptions.length">
      <div
        v-for="option in searchOptions"
        :key="option.id"
        @click="calculateAgain(option)"
        class="search-item"
        :class="{ selected: selectedSearchOption === option }"
      >{{ option.height }}cm {{ option.amountOfResults }} results</div>
    </div>
    <div v-else>
      <div class="empty-search">No searches.</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      searchOptions: 'searchOptions',
      selectedSearchOption: 'selectedSearchOption',
    }),
  },
  methods: {
    calculateAgain(option) {
      this.$store.commit('CALCULATE_DATA', option);
      this.$store.commit('SELECT_SEARCH_OPTION', option);
    },
  },
};
</script>
<style lang="scss" scoped>
.empty-search {
  padding: 50px;
  color: #fff;
  background-color: #192734;
}
.search-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  color: #ffffff;
  background: #192734;
  transition: all 0.3s;
  font-size: 95%;
  font-weight: 500;
  &:hover,
  &:active {
    background: #f3f3f3;
    color: #192734;
    cursor: pointer;
  }
}
.selected {
  background: #f3f3f3;
  color: #192734;
}
</style>
