<template>
    <div class="flexColumnBetween page servicePage">
        <header>
            <h1> {{ msg }}</h1>
        </header>
        <div class="mainContent">
            <ul>
                <li v-for="(service,index) in services" :key="index" class="flexItem">
                    <router-link :to="{ path: '/service/' + service.id }">
                        {{service.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'service',
    data () {
        return {
            msg: 'Service',
            services: [
                {id:1, title: 'service1', content: 'service1 contents'},
                {id:2, title: 'service2', content: 'service2 contents'},
                {id:3, title: 'service3', content: 'service3 contents'},
                {id:4, title: 'service4', content: 'service4 contents'},
                {id:5, title: 'service5', content: 'service5 contents'},
            ]
        }
    },
    methods: {

    }
}
</script>
<style scoped>
     h1 {
        text-align: center;
        font-weight: normal;
        color:#f0f;
    }
    ul li { width:100%; line-height: 3rem; padding:0 1rem;}
</style>
