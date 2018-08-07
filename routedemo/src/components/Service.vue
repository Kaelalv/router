<template>
    <div>
        <h1> {{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'service',
    data () {
        return {
            msg: 'Service'
        }
    }
}
</script>
<style scoped>
     h1 {
        text-align: center;
        font-weight: normal;
        color:#f0f;
    }
</style>
