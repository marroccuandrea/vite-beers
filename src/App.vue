<script>
  import axios from 'axios';
  import { store } from './data/store.js'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl,{
          params: this.store.queryParams
        })
        .then(result => {
          this.store.cardsList = result.data
          console.log(this.store.cardsList);
          this.store.nameList = result.data.map(item => item.name)
          console.log(this.store.nameList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }
</script>

<template>
  <Header @startSearch="getApi"/>
  <Main />
</template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>