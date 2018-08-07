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
    .menu{
  width: 100%;
  background-color:#00f;
  border-top: 1px solid #eee;
  
}
ul{
    width: 100%;
    
  }
li{
    text-align: center;
    height: 4rem;
    line-height: 4rem;
}
li:not(:last-child){
    border-right: 1px solid #ddd;
}
.router-link-active{
    background-color:#eee;
    color:#00f;
    font-size: 1.5rem;
}
</style>
