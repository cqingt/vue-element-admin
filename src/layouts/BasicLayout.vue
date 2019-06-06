<template>
  <div class>
    <el-container>
      <el-aside>
        <div class="sidebar-container">
          <el-menu :default-openeds="['1']">
            <SideMenu />
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header>
          <Header />
        </el-header>

        <el-main>
          主要内容区域
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toggleCollapse () {
      console.log(123456789);
      this.isCollapse = !this.isCollapse
    }
  },
  components: {
    Header,
    Footer,
    SideMenu
  }
};
</script>

<style>
img {
  border-style: none;
}
.el-header {
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header {
  height: 64px !important;
}
.el-aside {
  background-color: #001529;
  color: #333;
  text-align: center;
  width: 230px !important;
}

/* .el-aside:not(.el-menu--collapse) {
width: 230px!important;
  }

 .el-aside:has(.el-menu--collapse) {
   width: 54px!important;
  } */

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
#app .sidebar-container {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 230px !important;
  background-color: #001529;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  z-index: 10;
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
a {
  color: #1890ff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
  -webkit-text-decoration-skip: objects;
}
.el-footer {
  height: 100px !important;
  line-height: 100px;
  background-color: #f0f2f5 !important;
  opacity: 0.45;
}
</style>
