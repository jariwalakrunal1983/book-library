<template>
    <div class="App">
        <p class="DevelopedBy">
            You are running Vue front end app. 
            Switch to <a href="/react">React App</a> or
            <a href="/angular">Angular App</a>.  
            This demo created by <a target="_blank" href="https://github.com/jariwalakrunal1983">Krunal Jariwala</a>
        </p>
        <div class="Books">
            <div class="Left">
                <add-book/>
            </div>
            <div class="Right">
                <span v-if="errorMessage != ''" class="Error">{{errorMessage}}</span>
                <span v-if="successMessage != ''" class="Message">{{successMessage}}</span>
                <input type="text" placeholder="Search" class="SearchBar" v-model="searchValue"/>
                <book v-for="item in books" :book="item" :key="item.id" :searchValue="searchValue"/>
            </div>
        </div>
    </div>
</template>

<script>
import Book from '../components/Book'
import AddBook from '../components/AddBook'

import * as types from '../store/types';

import { mapGetters } from 'vuex'

export default {
    name: 'Books',
    data(){
        return{
            searchValue: '',
        }
    },
    created() {
        this.$store.dispatch(types.ACTION_GET_BOOKS);
    },
    components: {
        'book': Book,
        'add-book': AddBook
    },
    computed: mapGetters({
        books: types.GET_BOOKS,
        errorMessage: types.GET_ERROR_MESSAGE,
        successMessage: types.GET_SUCCESS_MESSAGE
    })
}
</script>

<style scoped>
</style>