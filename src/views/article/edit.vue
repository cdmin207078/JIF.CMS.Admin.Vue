<template>
  <div>

    <Row>
      <h1 v-if="article.id == 0">撰写新文章</h1>
      <h1 v-else>{{ article.title }}</h1>
    </Row>

    <Row>
      <i-col :sm="{ span: 17 }">
        <Form label-position="top">
          <Form-item label="标题">
            <Input v-model="article.title" placeholder="文章标题" size="large"></Input>
          </Form-item>
          <Form-item label="正文内容">
            <markdown-editor v-model="article.markdownContent" ref="markdownEditor" :configs="configs"></markdown-editor>
          </Form-item>

        </Form>
      </i-col>

      <i-col :sm="{ span: 6, offset: 1 }">
        <Form label-position="top">
          <Form-item label="发布日期">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
          <Form-item label="分类">
            <Select v-model="article.categoryid">
              <Option v-for="item in categories" :value="item.Id" :key="item">{{ item.Name }}</Option>
            </Select>
          </Form-item>
          <Form-item label="权限控制">
            <Checkbox v-model="article.allowComments">允许评论</Checkbox>
            <br />
            <Checkbox v-model="article.published">是否发布</Checkbox>
          </Form-item>
        </Form>
      </i-col>
    </Row>

    <Row>
      <Button @click="save" type="success">提交保存</Button>
    </Row>

  </div>
</template>

<script>
  import { markdownEditor } from 'vue-simplemde'

  export default {
    data() {
      return {
        article: {
          id: 0,
          title: '',
          markdownContent: '',
          allowComments: false,
          published: false,
          categoryid: 0,
        },
        categories: [],
        api_categories_url: '/article/GetCategories/',
        api_get_article: '/article/GetArticle/',
        api_add_article: '/article/AddArticle/',
        api_update_article: '/article/UpdateArticle/',
        
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
      this.loadCategories()
      this.loadArticle()
    },
    methods: {
      loadCategories() {
        this.$http.get(this.api_categories_url).then(response => {
          this.categories = response.data.data
        }, response => {
          this.$Message.error('获取失败, 返回: ' + response)
        })
      },
      loadArticle() {
        this.article.id = this.$route.params.id

        if (this.article.id) {
          this.$http.get(this.api_get_article, {
            params: {
              id: this.article.id
            }
          }).then(response => {
            let data = response.data.data

            this.article.title = data.Title
            this.article.markdownContent = data.MarkdownContent
            this.article.allowComments = data.AllowComments
            this.article.published = data.Published
            this.article.categoryid = data.CategoryId

          }, response => {
            this.$Message.error('文章信息获取失败, ' + response)
          })
        }
        
      },
      save() {
        // this.$Message.info(this.article.markdownContent)
        this.$http.post(this.api_update_article, {
            Title: this.article.title,
            CategoryId: this.article.categoryid,
            MarkdownContent: this.article.markdownContent,
            AllowComments: this.article.allowComments,
            Published: this.article.published
        }, {
          params: {
            id: this.article.id
          }
        }).then(response => {
          var result = response.data;
          if(result.success) {
            this.$Message.success('保存成功')
          } else {
            this.$Message.success('保存失败: ' + result.message)
          }
        }, response => {
            this.$Message.success('通讯失败, 保存失败: ' + result.message)          
        })
      },
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
