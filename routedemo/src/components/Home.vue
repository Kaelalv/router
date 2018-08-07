<template>
    <div>
        <h1> {{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'home',
    data () {
        return {
            msg: 'Home'
        }
    },
    methods:{

    }
}
</script>
<style scoped>
   
    h1 {
        text-align: center;
        font-weight: normal;
        color: #dd3333;
    }
</style>

