<script>
    export default {
        props:{
           price: String,
           name: String,
           image: String,
           rating: Object 
        }
    }
</script>

<template>
    <div class="col">
        <div class="card mb-4" style="width: 18rem;">
            <img :src="image" class="card-img-top" :alt="name">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Prezzo: {{ price }}</li>
                <li class="list-group-item">Recensioni: {{ rating.reviews }}</li>
                <li class="list-group-item">Media voti recensioni: {{ rating.average.toFixed(1) }}</li>
            </ul>
        </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>