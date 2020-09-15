<template>
  <div>
    <div class="info-container">
      <img src="../../public/icons/icons8-info-50.png" alt="#" class="info-icon" @click="startTour" />
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

export default {
  components: {
    TopHeader,
    ResultItem,
  },
  computed: {
    ...mapGetters({
      skiData: 'skiData',
      steps: 'steps',
    }),
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
</style>
