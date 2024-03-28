<script>
    import {store} from '../data/store'
    export default {  
    data(){
      return{
        store,
        nameSearch: ''
      }
    },
    methods: {
      startSearch(){
        this.store.queryParams = {
          num: 20,
          offset: 0,
          name: this.nameSearch
        }
        this.$emit('startSearch')
      }

    }
    
  }
</script>

<template>
    <h1 class="text-center my-3 ">{{ store.mainTitle }}</h1>
    <div class="container my-4">
      <div class="row">
        <div class="col">
          <input class="form-control" placeholder="Ricerca per nome" type="text" v-model="nameSearch" @keyup.enter="startSearch" >
        </div>
      </div>
    </div>

</template>


<style lang="scss" scoped>

</style>