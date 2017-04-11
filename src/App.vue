<template>
  <div id="app">
    <iNav></iNav>
    <Row type="flex" justify="center">
      <i-col :xs="22" :sm="20" :lg="16">
        <div class="layout">
          <Row>
            <Breadcrumb>
              <Breadcrumb-item href="/dashboard">一级目录</Breadcrumb-item>
              <Breadcrumb-item href="/article">二级目录</Breadcrumb-item>
              <Breadcrumb-item>三级页面</Breadcrumb-item>
            </Breadcrumb>
          </Row>

          <Row>
            <router-view></router-view>
          </Row>
        </div>
      </i-col>
    </Row>
    <!--<iContent></iContent>-->
  </div>
</template>

<script>
  import iNav from './views/layout/Nav'
  import iContent from './views/layout/content'

  export default {
    components: {
      iNav,
      iContent
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }

</script>

<style scope>
  body {
    background-color: #F6F6F3;
  }
  
  .layout {
    margin: 15px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 4px;
    border: 1px #ddd solid;
  }
  
  .ivu-row {
    margin-bottom: 10px;
  }
  
  .ivu-table-small td {
    height: 36px;
  }

  .ivu-menu-horizontal {
    height: 50px;
    line-height: 50px;
}
</style>