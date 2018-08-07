<template>
    <div class="flexColumnCenter notFoundPage">
        <h1>404</h1>
        <h1>找不到页面</h1>
    </div>
</template>
<script>
export default {
    name: 'notFoundPage',
    data () {
        return {
            msg: 'Service'
        }
    }
}
</script>
<style scoped>
.notFoundPage {
    background: #0a8acd;
    color:#fff;
    
}
h1 {
    font-weight: 500;
}
</style>
