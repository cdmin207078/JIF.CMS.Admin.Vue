<template>
  <div>
    <Row>
      <i-col :sm="{ span: 12 }">
        <Button type="primary" @click="gonew">新增</Button>
        <Button type="warning" @click="login">登陆</Button>
        <Button @click="setauth">设置授权</Button>
        
      </i-col>
      <i-col :sm="{ span: 12 }" style="text-align: right;">
        <Input style="width: 200px" placeholder="标题" v-model="q"></Input>
        <Button type="info" @click="loadArticles">搜索</Button>
      </i-col>
    </Row>
    
    <Row>
      <Table border :size="'small'" :context="self" :columns="cols" :data="source" @on-select="onSelect"></Table>
    </Row>

    <Row>
      <Page :total="source_totalitem" :current="source_pageindex" @on-change="onPageIndexChange" @on-page-size-change="onPageSizeChange" show-total show-sizer></Page>
    </Row>
  </div>
</template>

<script>
// import moment from 'moment'

export default {
  data() {
    return {
      self: this,
      cols: [
        { type: 'selection', width: '52px', align: 'center' },
        { title: '标题', key: 'Title' },
        { title: '作者', key: 'Author', width: 120 },
        { title: '分类', key: 'Category', width: 100 },
        { title: '日期', key: 'CreateTime', width: 150,
          render(row, column, index) {
            return '{{ this.$moment(\'' + row.CreateTime + '\').format("YYYY-MM-DD") }}'
          }
        },
        { title: '操作', key: 'action', width: 120, align: 'center', 
          render (row, column, index) {
            return `<i-button type="primary" size="small" @click="show(${row.Id})">查看</i-button> <i-button type="error" size="small" @click="remove(${row.Id})">删除</i-button>`
          }
        }
      ],
      source: [],
      q:'',
      source_totalitem: 1,
      source_totalpage: 1,
      source_pageindex: 1,
      source_pagesize: 10
    }
  },
  mounted() {
    this.loadArticles()
  },
  methods: {
    login() { 
      this.$http.post('/welcome/login',{
        account: 'cdmin207078',
        password: '111111'
      })
      .then(response => {
        let result  = response.data
        if(result.success) {
          this.$Message.success(response.data.message)
        } else {
          this.$Message.error(response.data.message)          
        }
      }, response => {
        this.$Message.error('登陆失败')        
      })
    },
    setauth() {
      let auth = {
        token: '123456'
      }

      // this.$http.headers.common['Authorization'] = auth;
      console.log(this.$http.defaults.auth)
    },
    gonew() {
      this.$router.push('/article/add')
    },
    show(id) {
      this.$router.push('/article/edit/' + id)
    },
    remove(row, column, index) {
      console.log(row)
      console.log(column)
      console.log(index)
    },
    loadArticles() {
      this.$http.get('/article/GetArticles', {
        params: {
          pageindex: this.source_pageindex,
          pagesize: this.source_pagesize,
          q: this.q
        }
      })
      .then(response => {
        this.$Message.success('获取成功')
        var data = response.data.data
        this.source_pageindex = data.PageIndex
        this.source_totalitem = data.TotalCount
        this.source_totalpage = data.TotalPages
        // this.source_pagesize = response.data.PageSize
        this.source = data.Items
      }, response => {
        this.$Message.error('获取失败, 返回: ' + response)
      })
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
    },

  }
}

</script>

<style>

</style>