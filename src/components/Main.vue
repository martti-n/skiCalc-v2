<template>
  <div>
    <div class="info-container">
      <img src="../../public/icons/icons8-info-50.png" alt="#" class="info-icon" @click="startTour" />
      <div class="latest-search-toggle">
        <span @click="showLatest = !showLatest">Quick select:</span>
      </div>
      <div class="tooltip" v-if="showLatest">
        <LatestSearches />
      </div>
    </div>
    <TopHeader @calculate="activateAnimateItems" />
    <div class="items" v-if="skiData">
      <div v-for="item in skiData" :key="item.id">
        <ResultItem :item="item" class="result-item" />
      </div>
    </div>
    <v-tour name="skiCalcTour" :steps="steps" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs';
import ResultItem from './item';
import TopHeader from './top-header.vue';
import LatestSearches from './LatestSearches';

export default {
  components: {
    TopHeader,
    ResultItem,
    LatestSearches,
  },
  data: () => ({
    showLatest: false,
  }),
  computed: {
    ...mapGetters({
      skiData: 'skiData',
      steps: 'steps',
    }),
  },
  async mounted() {
    await this.$store.commit('SET_SEARCH_ITEMS');
  },
  methods: {
    startTour() {
      this.$tours['skiCalcTour'].start();
    },
    animateItems() {
      anime({
        targets: '.result-item',
        translateX: {
          value: [-700, 0],
          duration: 20,
        },
        opacity: {
          value: [0, 1],
          duration: 100,
        },
        delay: anime.stagger(70, { start: 200 }),
      });
    },
    activateAnimateItems() {
      this.$nextTick(() => {
        this.animateItems();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.latest-search-toggle {
  padding-top: 10px;
  span {
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #fff;
    }
  }
}
.info-container {
  padding-left: 20px;
  padding-top: 20px;
}
.info-icon {
  cursor: pointer;
  height: 40px;
  width: 40px;
}
.items {
  margin: 0px auto;
  width: 33%;
  margin-top: 20px;
  @media (max-width: 400px) {
    width: 100%;
  }
}
.tooltip {
  position: absolute;
  margin-top: 10px;
  width: 200px;
  background: #15202b;
  color: #ffffff;
  text-align: center;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  transform: translate-x(-50%);
}
</style>
