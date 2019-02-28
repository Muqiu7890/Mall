<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="title" class="left"></router-view>
    <router-view name="img" class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  .left,.right{
    width:49%;
    border: 1px solid gray;
    float: left;
  }
</style>
