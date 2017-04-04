<template>
  <div>

    <Row>
      <h1>撰写新文章</h1>
    </Row>
    <Row>
      <i-col :sm="{ span: 17 }">
        <Form label-position="top">
          <Form-item label="标题">
            <Input v-model="title" placeholder="文章标题" size="large"></Input>
          </Form-item>
          <Form-item label="正文内容">
            <markdown-editor :value="content" :configs="configs"></markdown-editor>
          </Form-item>
          
        </Form>
      </i-col>

      <i-col :sm="{ span: 6, offset: 1 }">
        <Form label-position="top">
          <Form-item label="发布日期">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
          <Form-item label="分类">
            <Select v-model="sele_categories" multiple >
              <Option v-for="item in categories" :value="item.Id" :key="item">{{ item.Name }}</Option>
            </Select>
          </Form-item>
          <Form-item label="标签">
            <Input></Input>
            <Tag closable color="blue">aaaa</Tag>
            <Tag closable color="green">标签二</Tag>
            <Tag closable color="red">标签三</Tag>
            <Tag closable color="yellow">标签四</Tag>
          </Form-item>
        </Form>
      </i-col>
    </Row>

    <Row>
      <Button @click="save_draft">保存草稿</Button>
      <Button type="success">发布文章</Button>
    </Row>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde'

export default {
  data() {
    return {
      id: 0,
      title: '',
      content: '',
      categories: [],
      sele_categories: [2,1],
      api_categories_url: 'http://localhost:60007/article/GetCategories',
      api_get_article: 'http://localhost:60007/article/GetArticle',
      configs: {
        status: false, // 禁用底部状态栏
        spellChecker: false
      },
    }
  },
  components: {
    markdownEditor
  },
  mounted() {
    this.initEditor()
    this.loadCategories()
    this.loadArticle()
  },
  methods: {
    initEditor() {
      this.$Message.success('init editor ok')
    },
    loadCategories() {
      this.$http.get(this.api_categories_url).then(response => {
        this.categories = response.data
      }, response => {
        this.$Message.error('获取失败, 返回: ' + response)
      })
    },
    loadArticle() {
      this.id = this.$route.params.id

      if(this.id) {
        this.$http.get(this.api_get_article, {
          params: {
            id: this.id
          }
        }).then(response => {
          this.title = response.data.Title
          this.content = response.data.MarkdownContent
        }, response => {
          this.$Message.error('文章信息获取失败, ' +response)
        })
      }

    },
    save_draft() {
      this.$Message.success('categories:' + this.sele_categories)
    },
    publish() {
      1
      1
      1
    }
  }
}

</script>

<style scope>

  .ivu-form-item-content {
    line-height: 20px;
  }
  
  .ivu-tree ul li {
    margin: 0 0;
  }
  .text-article-title {
    font-weight: bolder;
  }
</style>