<template>
    <div>
        商品列表{{$route.params.id}}
        <!--命名路由-->
        <router-link v-bind:to="{name: 'cart',params:{cartId: 123}}">Cart</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"

    }
</script>

<style scoped>

</style>