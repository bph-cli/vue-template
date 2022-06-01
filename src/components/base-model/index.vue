<template>
  <div class="dialogBox">
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :show-close="false"
      :before-close="handleClose"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div class="dialog_content">
        <slot name="model-content"></slot>
      </div>
      <span slot="footer" class="dialog-footer">
        <slot name="model-footer"></slot>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "publicModel",
  props: {
    dialogTitle: {
      type: String,
      default: "详情",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("updateVisible", val);
      },
    },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
::v-deep .el-dialog {
  .el-dialog__header {
    font-weight: 700;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
  }
  .el-dialog__body {
    padding: 10px;
  }
  .el-dialog__footer {
  }
}
</style>
