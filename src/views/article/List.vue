<template>
  <div>
    <Row type="flex" justify="center">
      <i-col :xs="22" :sm="20" :lg="16" class="layout-content">
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>

        <div>
          <Table :border="true" :size="'small'" :columns="cols" :data="source"></Table>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cols: [
          { title: '标题', key: 'title' },
          { title: '作者', key: 'author' },
          { title: '分类', key: 'category' },
          { title: '日期', key: 'createtime' }
        ],
        source: []
      }
    },
    mounted() {
      for (var i = 0; i < 20; i++) {
        this.source.push({ id: 1, title: 'VueJs - 初见', author: 'admin', category: '	程序开发', createtime: '昨天 10:27' })
        this.source.push({ id: 1, title: 'phpstudy 访问速度慢解决办法', author: 'admin', category: '	程序开发', createtime: '4天前' })
        this.source.push({ id: 1, title: 'autofac 循环依赖处理', author: 'admin', category: '	程序开发', createtime: '6天前' })
        this.source.push({ id: 1, title: 'C# Enum - String - int 互相转换', author: 'admin', category: '	程序开发', createtime: '6天前' })
        this.source.push({ id: 1, title: 'typecho 安装访问端口设置', author: 'admin', category: '	程序开发', createtime: '3月22日' })
      }

      console.log(this.source.length);
    }
  }

</script>

<style>

</style>