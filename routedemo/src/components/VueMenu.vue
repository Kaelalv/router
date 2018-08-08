<template>
    <div class="menu">
        <ul class="flexRowBetween">
            <li v-for="(menu,index) in menus" :key="index" class="flexItem">
                
                <router-link :to="menu.path" tag="a" exact="">{{menu.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'vueMenu',
    data () {
        return {
            msg: 'Menu',
            menus: [
                {id:1, path: './home', name:'home', title:'首页'},
                {id:2, path: './about', name:'about', title:'关于'},
                {id:3, path: './service', name:'service', title:'服务'},
                {id:4, path: './hello', name:'hello', title:'测试'}
            ]
        }
    },
    methods: {

    }
}
</script>
<style scoped>
    * { padding:0; margin: 0; border: none; list-style: none;}
    .menu{
        width: 100%;
        background-color:#fff;
        position: absolute;
        left:0;
        bottom:0;
    }
    .menu ul{
        width: 100%;
        
    }
    .menu ul li{
        width:25%;
        text-align: center;
        list-style: none;
        float:left;
        height: 4rem;
        line-height: 4rem;
    }
    .router-link-active{
        background-color:#eee;
        color:#000;
        font-size: 1.5rem;
    }
</style>
