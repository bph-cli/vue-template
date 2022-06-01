<template>
  <div class="publicTable">
    <el-table
      ref="publicTable"
      :data="tableData"
      :row-key="getRowKey"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-table-column
        v-if="showSelect"
        :align="align"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        :align="align"
        width="55"
        label="序号"
      ></el-table-column>
      <el-table-column
        v-for="col in tableColumns"
        v-bind="col"
        :key="col.prop"
        :align="col.align || align"
      >
        <template #header="scope">
          <slot :name="col.header" :scope="{ header: col.label, ...scope }">
            <span>{{ col.label }}</span>
          </slot>
        </template>
        <template #default="scope">
          <slot :name="col.prop" :scope="scope">
            <span>{{ scope.row[col.prop] }}</span>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "publicTable",
  components: {},
  data() {
    return {};
  },
  props: {
    showSelect: {
      type: Boolean,
      default: false,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: "center",
    },
    tableData: {
      type: Array,
      default: () => [],
      require: true,
    },
    tableColumns: {
      type: Array,
      default: () => [],
      require: true,
    },
    rowKey: {
      type: String,
      default: "id",
    },
  },
  computed: {},
  watch: {},
  methods: {
    getRowKey(row) {
      return row[this.rowKey];
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
