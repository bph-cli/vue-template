<template>
  <div ref="container" class="d-flex" style="position: relative">
    <div style="width: 100%; height: 100%">
      <slot>默认信息</slot>
    </div>
    <div v-if="resizeShow" class="resize"></div>
  </div>
</template>
<script>
export default {
  props: {
    resizeShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.resize {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  // color:#bbb;
  // display: flex;
  // align-items: center;
  height: 100%;
  cursor: col-resize;
  background-color: #d6d6d6;
}
</style>
