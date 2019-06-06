<template>
  <div class="navbar">
    <div class="left-menu">
      <div class="hamburger-container hamburger" style="padding: 0px 18px;">
        <i class="el-icon-s-fold is-active"></i>
      </div>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right-menu">
      <el-row>
        <el-col>
          <el-dropdown placement="bottom">
            <span class="el-dropdown-link">
              <img
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                class="user-avatar"
              />
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-right">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-s-fold {
  font-size: 24px;
  position: relative;
  top: 4px;
  color: #6a6a6a;
}
.navbar {
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.navbar .hamburger-container {
  height: 100%;
  float: left;
  cursor: pointer;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}
svg:not(:root) {
  overflow: hidden;
}
.hamburger .is-active {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 64px;
  margin-left: 8px;
}
.navbar .left-menu {
  float: left;
  height: 100%;
}
.navbar .right-menu {
  float: right;
  height: 100%;
  line-height: 64px;
  position: relative;
  right: 20px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  height: 50px; /** 设置小于父级高度，让弹窗靠近顶部 */
}
.navbar .right-menu .user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-top: 12px;
}
</style>
