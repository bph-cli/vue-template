<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <logo :isCollapse="isCollapse"></logo>
    <div class="menu_search" v-if="!isCollapse">
      <el-select v-model="selectRoute" @change="handleChange">
        <el-option
          v-for="item in options"
          :key="item.path"
          :label="item.meta.title"
          :value="item.redirect"
        >
        </el-option>
      </el-select>
    </div>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#000"
      text-color="white"
      active-text-color="#42b983"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import logo from "./logo";
export default {
  data() {
    return {
      selectRoute: "",
    };
  },
  components: { SidebarItem, logo },
  computed: {
    ...mapGetters([
      "sidebar",
      // 'permission_routers'
    ]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    permission_routers() {
      return this.$router.options.routes;
    },
    options() {
      return this.permission_routers.filter((item) => {
        return item.meta;
      });
    },
  },
  methods: {
    handleChange(val) {
      this.$router.push(val);
    },
  },
  created() {
    console.log(this.permission_routers, "permission_routers ");
  },
};
</script>
<style lang="scss" scoped>
.menu_search {
  background: #000;
  padding: 0 8px;
}
</style>
