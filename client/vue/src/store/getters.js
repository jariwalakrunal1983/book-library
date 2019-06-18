import * as types from './types';

export default {
    [types.GET_BOOKS]: state => { 
        return state.books;
    },
    [types.GET_ERROR_MESSAGE]: state => { 
        return state.errorMessage;
    },
    [types.GET_SUCCESS_MESSAGE]: state => { 
        return state.successMessage;
    }
}