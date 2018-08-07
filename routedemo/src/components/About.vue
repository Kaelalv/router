<template>
    <div>
        <h1> {{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'about',
    data () {
        return {
            msg: 'About'
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
