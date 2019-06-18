import * as actionTypes from './actions';

const initialState = {
    books: [],
    isPending: false,
    hasError: null,
    message: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_BOOK:
            const newBook = {
                id: state.books.length + 1,
                name: action.data.name,
                description: action.data.description,
                count: action.data.count,
                author: action.data.author,
            }
            return {
                ...state,
                books: state.books.concat( newBook )
            }
        case actionTypes.BOOK_NAME_CHANGE:
            const bookNameChange = [...state.books];
            for(let i=0; i < bookNameChange.length; i++){
                if(bookNameChange[i].id === action.data.id)
                    bookNameChange[i].name = action.data.name;
            }
            return {
                ...state,
                books: bookNameChange
            }
        case actionTypes.BOOK_DESCRIPTION_CHANGE:
            const bookDescriptionChange = [...state.books];
            for(let i=0; i < bookDescriptionChange.length; i++){
                if(bookDescriptionChange[i].id === action.data.id)
                    bookDescriptionChange[i].description = action.data.description;
            }
            return {
                ...state,
                books: bookDescriptionChange
            }
        case actionTypes.BOOK_COUNT_CHANGE:
            const bookCountChange = [...state.books];
            for(let i=0; i < bookCountChange.length; i++){
                if(bookCountChange[i].id === action.data.id)
                    bookCountChange[i].count = action.data.count;
            }
            return {
                ...state,
                books: bookCountChange
            }
        case actionTypes.BOOK_AUTHOR_CHANGE:
            const bookAuthorChange = [...state.books];
            for(let i=0; i < bookAuthorChange.length; i++){
                if(bookAuthorChange[i].id === action.data.id)
                    bookAuthorChange[i].author = action.data.author;
            }
            return {
                ...state,
                books: bookAuthorChange
            }
        case actionTypes.REMOVE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.id)
            }
        case actionTypes.FETCH_BOOKS_PENDING: 
            return {
                ...state,
                isPending: true
            }
        case actionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isPending: false,
                books: action.books
            }
        case actionTypes.FETCH_BOOKS_ERROR:
            return {
                ...state,
                isPending: false,
                hasError: action.error
            }
        case actionTypes.SAVE_BOOKS_PENDING: 
            return {
                ...state,
                isPending: true
            }
        case actionTypes.SAVE_BOOKS_SUCCESS:
            return {
                ...state,
                isPending: false,
                message: action.message
            }
        case actionTypes.SAVE_BOOKS_ERROR:
            return {
                ...state,
                isPending: false,
                hasError: action.error
            }
        default:
            return state;
    }
};

export default reducer;