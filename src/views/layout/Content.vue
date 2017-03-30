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
          <router-view></router-view>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

</script>

<style>

</style>