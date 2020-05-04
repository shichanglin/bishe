<template>
  <el-menu
    class="menu-nav"
    router
    :default-active="currentPath"
    background-color="#20222A"
    text-color="rgba(255,255,255,.8)"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
    <el-menu-item index="/console">
      <i class="el-icon-menu"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <!-- <el-menu-item index="/users">
      <i class="el-icon-phone"></i>
      <span slot="title">客服中心</span>
    </el-menu-item> -->
      <el-submenu index="3">
      <template slot="title">
         <i class="el-icon-phone"></i>
        <span>客服中心</span>
      </template>
      <el-menu-item index="/users">用户监控</el-menu-item>
      <el-menu-item index="/warning">网点分布</el-menu-item>
      <el-menu-item index="/userComplain">用户投诉</el-menu-item>
    </el-submenu>
      <el-submenu index="6">
      <template slot="title">
         <i class="el-icon-document"></i>
        <span>运营中心</span>
      </template>
      <el-menu-item index="/forUser">用户行为</el-menu-item>
      <el-menu-item index="/userDatas">各类数据</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="/articles">
      <i class="el-icon-document"></i>
      <span slot="title">文章</span>
    </el-menu-item> -->
  
    <!-- <el-menu-item index="/echarts">
      <i class="el-icon-first-aid-kit"></i>
      <span slot="title">图表</span>
    </el-menu-item> -->
       <el-submenu index="5">
      <template slot="title">
         <i class="el-icon-view"></i>
        <span>疫情专区</span>
      </template>
      <el-menu-item index="/china">国内疫情</el-menu-item>
      <!-- <el-menu-item index="/chinaNow">国内现状</el-menu-item> -->
      <el-menu-item index="/world">海外疫情</el-menu-item>
    </el-submenu>
      <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-news"></i>
        <span>其他/娱乐</span>
      </template>
      <el-menu-item index="/owen">个人运动数据</el-menu-item>
      <el-menu-item index="/happy">小说间客关系图</el-menu-item>
      <el-menu-item index="/school">哈理工院系关系</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  props: ['isCollapse'],
  data () {
    return {
      currentPath: location.pathname
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-menu {
    border: none;
  }
  .menu-nav:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
