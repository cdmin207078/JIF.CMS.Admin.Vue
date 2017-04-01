<template>
  <div>

    <Row>
      <h1>撰写新文章</h1>
    </Row>
    <Row>
      <i-col :sm="{ span: 17 }">
        <Form label-position="top">
          <Form-item label="标题">
            <Input placeholder="文章标题"></Input>
          </Form-item>
          <Form-item label="文本域">
            <Input v-model="content" type="textarea" :autosize="{minRows: 20 }" placeholder="正文内容"></Input>
          </Form-item>
        </Form>
      </i-col>
      <i-col :sm="{ span: 6, offset: 1 }">
        <Form label-position="top">
          <Form-item label="发布日期">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
          <Form-item label="分类">
            <Tree :data="baseData" :multiple="true" :show-checkbox="true" :expand="true" show-checkbox></Tree>
          </Form-item>
          <Form-item label="标签">
            <Input></Input>

            <Tag closable color="blue">标签一</Tag>
            <Tag closable color="green">标签二</Tag>
            <Tag closable color="red">标签三</Tag>
            <Tag closable color="yellow">标签四</Tag>
          </Form-item>
        </Form>
      </i-col>
    </Row>

    <Row>
      <Button>保存草稿</Button>
      <Button type="success">发布文章</Button>
    </Row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: '',
        baseData: [{
          title: 'parent 1',
          children: [{
            title: 'parent 1-0',
            children: [{
              title: 'leaf',
            }, {
              title: 'leaf',
            }]
          }, {
            title: 'parent 1-1',
            children: [{
              title: '<span style="color: red">leaf</span>',
            }]
          }]
        }]
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
</style>