import axios from 'axios';

import {demoData} from './data'
import * as types from './types';

export default {
    [types.MUTATE_ADD_BOOK]: (state, payload) => {
        state.books.push(payload);
    },
    [types.MUTATE_SAVE_BOOKS]: (state) => {
        if(process.env.NODE_ENV !== 'development') {
            axios({url:'api/save', method:'POST', data: state.books})
            .then(res => {
                if(res.error) { 
                    state.errorMessage = res.error; 
                } else {
                    state.successMessage = res.data.message;
                    setTimeout(function(){ state.successMessage = '' },2000)
                }
            })
            .catch(error => {
                state.errorMessage = error;
            })
        } else {
            state.successMessage = 'You are running development environment so you can not save data!';
            setTimeout(function(){ state.successMessage = '' },2000)
        }
    },
    [types.MUTATE_GET_BOOKS]: (state) => {
        if(process.env.NODE_ENV !== 'development') {
            axios.get('api/data')
            .then(res => {
                state.books = res.data;
                return state.books;
            })
            .catch(error => {
                state.errorMessage = error;
                return state.books;
            })
        } else {
            state.books = demoData;
            return state.books;
        }
    },
    [types.MUTATE_REMOVE_BOOK]: (state, payload) => {
        let books = state.books;
        for (let index = 0; index < books.length; index++) {
            if(books[index].id == payload)
                books.splice(index,1);
        }
    }
};