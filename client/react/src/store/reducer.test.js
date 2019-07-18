import reducer from './reducer';
import * as actionTypes from './actions';

describe('actions', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                books: [],
                isPending: false,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle ADD_BOOK', () => {
        const newBook = {id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'};
        expect(reducer(undefined, {
                type: actionTypes.ADD_BOOK,
                data: newBook
            })
        ).toEqual(
            {
                books: [newBook],
                isPending: false,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle BOOK_NAME_CHANGE', () => {
        const initialState = { books : [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'}] }
        expect( reducer(initialState, {
                type: actionTypes.BOOK_NAME_CHANGE,
                data: { id: 1, name: 'Book Name Changed'}
            })
        ).toEqual(
            {
                books: [{id: 1, name: 'Book Name Changed', description: 'Book Description', count: 1, author: 'Book Author'}]
            }
        )
    });

    it('should handle BOOK_DESCRIPTION_CHANGE', () => {
        const initialState = { books : [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'}] }
        expect( reducer(initialState, {
                type: actionTypes.BOOK_DESCRIPTION_CHANGE,
                data: { id: 1, description: 'Book Description Changed'}
            })
        ).toEqual(
            {
                books: [{id: 1, name: 'Book Name', description: 'Book Description Changed', count: 1, author: 'Book Author'}]
            }
        )
    });

    it('should handle BOOK_COUNT_CHANGE', () => {
        const initialState = { books : [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'}] }
        expect( reducer(initialState, {
                type: actionTypes.BOOK_COUNT_CHANGE,
                data: { id: 1, count: 5}
            })
        ).toEqual(
            {
                books: [{id: 1, name: 'Book Name', description: 'Book Description', count: 5, author: 'Book Author'}]
            }
        )
    });

    it('should handle BOOK_AUTHOR_CHANGE', () => {
        const initialState = { books : [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'}] }
        expect( reducer(initialState, {
                type: actionTypes.BOOK_AUTHOR_CHANGE,
                data: { id: 1, author: 'Book Author Changed'}
            })
        ).toEqual(
            {
                books: [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author Changed'}]
            }
        )
    });

    it('should handle REMOVE_BOOK', () => {
        const initialState = { books : [{id: 1, name: 'Book Name', description: 'Book Description', count: 1, author: 'Book Author'}] }
        expect( reducer(initialState, {
                type: actionTypes.REMOVE_BOOK,
                id: 1
            })
        ).toEqual(
            {
              books: []
            }
        )
    });

    it('should handle FETCH_BOOKS_PENDING', () => {
        expect(reducer(undefined, {
                type: actionTypes.FETCH_BOOKS_PENDING
            })
        ).toEqual(
            {
                books: [],
                isPending: true,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle FETCH_BOOKS_PENDING', () => {
        expect(reducer(undefined, {
                type: actionTypes.FETCH_BOOKS_PENDING
            })
        ).toEqual(
            {
                books: [],
                isPending: true,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle FETCH_BOOKS_SUCCESS', () => {
        expect(reducer(undefined, {
                type: actionTypes.FETCH_BOOKS_SUCCESS,
                books: []
            })
        ).toEqual(
            {
                books: [],
                isPending: false,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle FETCH_BOOKS_ERROR', () => {
        expect(reducer(undefined, {
                type: actionTypes.FETCH_BOOKS_ERROR,
                error: null
            })
        ).toEqual(
            {
                books: [],
                isPending: false,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle SAVE_BOOKS_PENDING', () => {
        expect(reducer(undefined, {
                type: actionTypes.SAVE_BOOKS_PENDING
            })
        ).toEqual(
            {
                books: [],
                isPending: true,
                hasError: null,
                message: null
            }
        )
    });

    it('should handle SAVE_BOOKS_SUCCESS', () => {
        expect(reducer(undefined, {
                type: actionTypes.SAVE_BOOKS_SUCCESS,
                message: 'Data saved successfully!'
            })
        ).toEqual(
            {
                books: [],
                isPending: false,
                hasError: null,
                message: 'Data saved successfully!'
            }
        )
    });

    it('should handle SAVE_BOOKS_ERROR', () => {
        expect(reducer(undefined, {
                type: actionTypes.SAVE_BOOKS_ERROR,
                error: 'Something went wrong, please contact administrator!'
            })
        ).toEqual(
            {
                books: [],
                isPending: false,
                hasError: 'Something went wrong, please contact administrator!',
                message: null
            }
        )
    });
})