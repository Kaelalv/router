<template>
    <div class="flexCoumnBetween page servicePage">
        <header>
            <h1>{{ msg }}</h1>
            <div class="mainContent">
                <p>{{ msg }}</p>
                <p>ID：{{ serviceId }}</p>
                <p class="back" v-on:click="goback">返回</p>
                <p class="back" v-on:click="back">返回</p>
                <ul>
                    <li v-for="(service,index) in services" :key="index" class="flexItem">
                        <router-link :to="{ path: '/service/' + service.id }">
                            {{ service.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'ServiceDetail',
        data () {
            return {
                msg: 'Service 详情页面',
                serviceId: null,
                services:[
                    {id:1,title:'service1',content:'service1 contents'},
                    {id:2,title:'service2',content:'service2 contents'},
                    {id:3,title:'service3',content:'service3 contents'},
                    {id:4,title:'service4',content:'service4 contents'},
                    {id:5,title:'service5',content:'service5 contents'},
                ]
            }
        },
        watch: {
            '$route' (to,from){
                console.log(to);
                console.log(from);
                this.serviceId = to.params.id;
            }
        },
        methods: {
            goback () {
                this.$router.go(-1);
            },
            back () {
                this.$router.back();
            }
        },
        mounted () {
            console.log(this.$route);
            console.log(this.$router);
            this.serviceId = this.$route.params.id;
        }
    }
</script>
<style scoped>
    .servicePage {
        padding:1rem;
    }
    .servicePage .mainContent p {
        height:3rem;
        line-height: 3rem;
        text-align: center;
        font-size: 1.5rem;
    }
    .servicePage .mainContent .back {
         color:#dd3333;
         text-decoration:underline;
    }
    .servicePage .mainContent ul li {
        list-style: none;
        height:3rem;
        line-height: 3rem;
        padding: 0 3rem;
        color:black;
        border-bottom: 1px solid #ddd;
        background: #fff;
        text-align: left;
    }
</style>
