<template>
  <div>
    <Row>
      <i-col :sm="{ span: 12 }">
        <Button type="primary">新增</Button>
      </i-col>
      <i-col :sm="{ span: 12 }" style="text-align: right;">
        <Input icon="search" style="width: 200px"></Input>
        <Button type="info">搜索</Button>
      </i-col>
    </Row>
    <Row>
      <Table :border="true" :size="'small'" :columns="cols" :data="source" @on-row-click="onRowClick" @on-select="onSelect"></Table>
    </Row>
    <Row>
      <Page :total="100" show-sizer></Page>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cols: [
          { type: 'selection', width: '50px', align: 'center' },
          { title: '标题', key: 'title' },
          { title: '作者', key: 'author' },
          { title: '分类', key: 'category' },
          { title: '日期', key: 'createtime' }
        ],
        source: []
      }
    },
    mounted() {
      for (var i = 0; i < 4; i++) {
        this.source.push({ id: 1, title: 'VueJs - 初见', author: 'admin', category: '	程序开发', createtime: '昨天 10:27' })
        this.source.push({ id: 1, title: 'phpstudy 访问速度慢解决办法', author: 'admin', category: '	程序开发', createtime: '4天前' })
        this.source.push({ id: 1, title: 'autofac 循环依赖处理', author: 'admin', category: '	程序开发', createtime: '6天前' })
        this.source.push({ id: 1, title: 'C# Enum - String - int 互相转换', author: 'admin', category: '	程序开发', createtime: '6天前' })
        this.source.push({ id: 1, title: 'typecho 安装访问端口设置', author: 'admin', category: '	程序开发', createtime: '3月22日' })
      }
    },
    methods: {
      onRowClick(data) {
        // console.info(data.title)
      },
      onSelect(selection, row) {
        this.$Notice.open({
          title: row.id,
          desc: row.title,
        })
      }
    }
  }

</script>

<style>

</style>