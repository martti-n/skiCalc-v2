<template>
  <div class="row">
    <p>{{ item.skiLength }}</p>
    <p>{{ item.weight }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  margin: 3px auto;
  background: #15202b;
  transition: all 0.5s;
  &:hover,
  &:active {
    background: #f3f3f3;
    color: black;
    transform: scale(1.2);
    cursor: pointer;
  }
}
</style>
