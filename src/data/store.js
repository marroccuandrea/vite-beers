import { reactive } from 'vue'

export const store = reactive({
    counter: 0,
    mainTitle: 'Vite Beers',
    apiUrl: 'https://api.sampleapis.com/beers/ale',
    cardsList: [],
    queryParams: {

    }
})