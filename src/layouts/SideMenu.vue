<template>
  <div class="el-scrollbar">
    <div class="sider-menu-logo">
      <a href="">
        <img
          src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
          alt="logo"
        />
        <h1>系统管理</h1>
      </a>
    </div>
    <el-submenu index="1">
      <template slot="title"
        ><i class="el-icon-setting"></i>系统设置</template
      >

      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"
        ><i class="el-icon-user"></i>用户管理</template
      >

      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title"
          >选项4</template
        >
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"
        ><i class="el-icon-menu"></i>订单管理</template
      >
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
      <el-submenu index="3-4">
        <template slot="title"
          >选项4</template
        >
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {}
   },
  components: {}
}
</script>

<style>
.sider-menu-logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #001529;
  transition: all 0.3s;
  text-align: left;
}
.sider-menu-logo img {
  display: inline-block;
  height: 32px;
  vertical-align: middle;
}
.sider-menu-logo h1 {
  display: inline-block;
  margin: 0 0 0 12px;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: middle;
}
.el-menu {
  text-align: left;
  border-right: none;
}
.el-submenu .el-menu-item,
.el-submenu {
  background-color: #001529;
  color: #d0d0d0;
}
.el-submenu .el-menu-item:hover,
.el-submenu:hover {
  background-color: #001529;
  color: #fff;
}
.el-submenu__title {
  color: #d0d0d0;
}
.el-submenu__title:hover {
  color: #fff;
}
.el-submenu__title:hover {
  background-color: #001529;
}
.el-submenu.is-opened .el-menu-item.is-active {
  background-color: #1890ff !important;
  color: #fff;
}
.el-submenu.is-opened .el-menu-item,
.el-submenu.is-opened .el-submenu {
  background-color: #304156 !important;
}
</style>
