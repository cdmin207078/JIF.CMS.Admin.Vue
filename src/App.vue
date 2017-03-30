<template>
  <div id="app">
    <iNav></iNav>
    <row type="flex" justify="center">
      <i-col :xs="22" :sm="20" :lg="16">
        <div class="layout">
          <Row>
            <Breadcrumb>
              <Breadcrumb-item href="/dashboard">Dashboard</Breadcrumb-item>
              <Breadcrumb-item href="/article">文章</Breadcrumb-item>
              <Breadcrumb-item>列表</Breadcrumb-item>
            </Breadcrumb>
          </Row>

          <Row>
            <router-view></router-view>
          </Row>
        </div>
      </i-col>
    </row>
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