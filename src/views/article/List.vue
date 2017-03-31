<template>
  <div>
    <Row>
      <i-col :sm="{ span: 12 }">
        <Button type="primary">新增</Button>
      </i-col>
      <i-col :sm="{ span: 12 }" style="text-align: right;">
        <Input style="width: 200px" placeholder="标题"></Input>
        <Button type="info">搜索</Button>
      </i-col>
    </Row>
    <Row>
      <Table :border="true" :size="'small'" :columns="cols" :data="source" @on-row-click="onRowClick" @on-select="onSelect"></Table>
    </Row>

    <Row>

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
          { type: 'selection', width: '52px', align: 'center' },
          { title: '标题', key: 'Title' },
          { title: '作者', key: 'Author' },
          { title: '分类', key: 'Category' },
          { title: '日期', key: 'CreateTime' }
        ],
        source: [],
        api_articles_url: 'http://localhost:60007/article/index'
      }
    },
    mounted() {

      this.$http.get(this.api_articles_url).then(response => {
        this.$Message.success('获取成功')
        this.source = response.data
      }, response => {
        this.$Message.error('获取失败, 返回: ' + response)
      })

    },
    methods: {
      onRowClick(data) {

      },
      onSelect(selection, row) {
        this.$Notice.open({
          title: row.Id,
          desc: row.Title,
        })
      }
    }
  }

</script>

<style>

</style>