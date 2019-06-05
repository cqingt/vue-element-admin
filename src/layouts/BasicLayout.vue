<template>
  <div class>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SideMenu />
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default {
  name: "",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  components: {
    Header,
    Footer,
    SideMenu
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
