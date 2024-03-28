<script>
    import {store} from '../data/store'
    import Card from './partials/Card.vue'
    export default {  
        components: {
            Card
        },
    data(){
      return{
        store
      }
    }
    
  }
</script>

<template>
  <div class="container my-5 ">
    <div class="row row-cols-4">
      <Card v-for="card in this.store.cardsList" :key="card.id" :name="card.name" :price="card.price" :image="card.image" :rating="card.rating"/>
    </div>
    
  </div>
    

</template>


<style lang="scss" scoped>

</style>