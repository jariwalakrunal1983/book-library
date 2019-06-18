export const ADD_BOOK = 'ADD_BOOK';
export const BOOK_NAME_CHANGE = 'BOOK_NAME_CHANGE';
export const BOOK_DESCRIPTION_CHANGE = 'BOOK_DESCRIPTION_CHANGE';
export const BOOK_COUNT_CHANGE = 'BOOK_COUNT_CHANGE';
export const BOOK_AUTHOR_CHANGE = 'BOOK_AUTHOR_CHANGE';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const SAVE_BOOKS = 'SAVE_BOOKS';
export const FETCH_BOOKS_PENDING = 'FETCH_BOOKS_PENDING';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const SAVE_BOOKS_PENDING = 'SAVE_BOOKS_PENDING';
export const SAVE_BOOKS_SUCCESS = 'SAVE_BOOKS_SUCCESS';
export const SAVE_BOOKS_ERROR = 'SAVE_BOOKS_ERROR';

export function fecthBooksPending() {
    return {
        type: FETCH_BOOKS_PENDING
    }
}

export function fecthBooksSuccess(res) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books: res
    }
}

export function fecthBooksError(error) {
    return {
        type: FETCH_BOOKS_ERROR,
        hasError: error
    }
}

export function saveBooksPending() {
    return {
        type: SAVE_BOOKS_PENDING
    }
}

export function saveBooksSuccess(res) {
    return {
        type: SAVE_BOOKS_SUCCESS,
        message: res
    }
}

export function saveBooksError(error) {
    return {
        type: SAVE_BOOKS_ERROR,
        hasError: error
    }
}