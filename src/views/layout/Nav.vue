<template>
  <div>
    <Row>
      <i-menu mode="horizontal" :theme="'primary'" active-name="1">
        
        <Submenu name="1">
          <template slot="title">
            <!--<Icon type="ios-people"></Icon>-->
            控制台
          </template>
          <Menu-item name="1-1">概要</Menu-item>
          <Menu-item name="1-2">个人设置</Menu-item>
          <Menu-item name="1-3">插件</Menu-item>
          <Menu-item name="1-4">外观</Menu-item>
        </Submenu>

        <Submenu name="2">
          <template slot="title">
            <!--<Icon type="ios-people"></Icon>-->
            撰写
          </template>
          <Menu-item name="2-1">撰写文章</Menu-item>
          <Menu-item name="2-2">创建页面</Menu-item>
        </Submenu>
        
        <Submenu name="3">
          <template slot="title">
            管理
          </template>
          <Menu-item name="3-1">文章</Menu-item>
          <Menu-item name="3-2">独立页面</Menu-item>
          <Menu-item name="3-3">评论</Menu-item>
          <Menu-item name="3-4">分类</Menu-item>
          <Menu-item name="3-5">标签</Menu-item>
          <Menu-item name="3-6">文件</Menu-item>
          <Menu-item name="3-7">用户</Menu-item>
          <Menu-item name="3-8">两百位日本配乐作曲家，每人一首良曲</Menu-item>
          
        </Submenu>

        <Submenu name="4">
          <template slot="title">
            <Icon type="settings"></Icon>
            设置
          </template>
          <Menu-item name="4-1">基本</Menu-item>
          <Menu-item name="4-2">评论</Menu-item>
          <Menu-item name="4-3">阅读</Menu-item>
          <Menu-item name="4-4">永久链接</Menu-item>          
        </Submenu>
      </i-menu>
    </Row>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scope>

</style>