<template>
  <div>
    <Row>
      <i-col :sm="{ span: 12 }">
        <Button type="primary" href="/article/add">新增</Button>
      </i-col>
      <i-col :sm="{ span: 12 }" style="text-align: right;">
        <Input style="width: 200px" placeholder="标题" v-model="q"></Input>
        <Button type="info" @click="loadArticles">搜索</Button>
      </i-col>
    </Row>
    <Row>
      <Table :border="true" :size="'small'" :columns="cols" :data="source" @on-row-click="onRowClick" @on-select="onSelect"></Table>
    </Row>

    <Row>
      <Page :total="source_totalitem" :current="source_pageindex" @on-change="onPageIndexChange" @on-page-size-change="onPageSizeChange" show-total show-sizer></Page>
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
        q:'',
        source_totalitem: 1,
        source_totalpage: 1,
        source_pageindex: 1,
        source_pagesize: 10,
        api_articles_url: 'http://localhost:60007/article/index'
      }
    },
    mounted() {
      
      this.loadArticles()
    },
    methods: {
      loadArticles() {
        this.$http.get(this.api_articles_url, {
          params: {
            pageindex: this.source_pageindex,
            pagesize: this.source_pagesize,
            q: this.q
          }
        })
        .then(response => {
          this.$Message.success('获取成功')
          this.source_pageindex = response.data.PageIndex
          this.source_totalitem = response.data.TotalCount
          this.source_totalpage = response.data.TotalPages
          this.source = response.data.Items
        }, response => {
          this.$Message.error('获取失败, 返回: ' + response)
        })
      },
      onRowClick(data) {

      },
      
      onSelect(selection, row) {
        this.$Notice.open({
          title: row.Id,
          desc: row.Title,
        })
      },
      onPageIndexChange(pageindex) {
        this.source_pageindex = pageindex
        this.loadArticles()
      },
      onPageSizeChange(pagesize) {
        this.source_pagesize = pagesize
        this.loadArticles()
      }
    }
  }

</script>

<style>

</style>