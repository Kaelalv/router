<template>
  <div class="hello">
    <h1> {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    
    h1 {
        text-align: center;
        font-weight: normal;
        color:#f0f;
    }
</style>