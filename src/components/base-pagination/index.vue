<template>
  <div class="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :page-sizes="pageSizesArr"
      :total="total"
      :current-page="currentPage"
      :page-size="pageSize"
      :layout="layout"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageSizesArr: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50];
      },
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
  },

  data() {
    return {
      page: {
        _pageSize: this.pageSize,
        _currentPage: this.currentPage,
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      this.page._pageSize = val;
      this.$emit("pageChange", this.page);
    },
    handleCurrentChange(val) {
      this.page._currentPage = val;
      this.$emit("pageChange", this.page);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.pagination {
  margin: 20px 0;
  background: $grad;
  padding: 10px;
}
</style>
