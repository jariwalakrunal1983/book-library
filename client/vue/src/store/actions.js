import * as types from './types';

export default {
    [types.ACTION_ADD_BOOK]: ({commit}, payload) => {
        commit(types.MUTATE_ADD_BOOK, payload);
    },
    [types.ACTION_SAVE_BOOKS]: ({commit}, payload) => {
        commit(types.MUTATE_SAVE_BOOKS, payload);
    },
    [types.ACTION_GET_BOOKS]: ({commit}, payload) => {
        commit(types.MUTATE_GET_BOOKS, payload);
    },
    [types.ACTION_REMOVE_BOOK]: ({commit}, payload) => {
        commit(types.MUTATE_REMOVE_BOOK, payload);
    }
}