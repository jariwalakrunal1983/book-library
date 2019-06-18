import {saveBooksPending, saveBooksSuccess, saveBooksError} from './actions';
import axios from 'axios';

function saveBooks(books) {
    return dispatch => {
        if(process.env.NODE_ENV !== 'development') {
            dispatch(saveBooksPending());
            axios({url:'api/save', method:'POST', data: books})
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(saveBooksSuccess(res.data.message));
                setTimeout(function(){ dispatch(saveBooksSuccess(null)); },2000);
                return res;
            })
            .catch(error => {
                dispatch(saveBooksError(error));
                setTimeout(function(){ dispatch(saveBooksError(null)); },2000);
            })
        } else {
            dispatch(saveBooksSuccess('You are running development environment so you can not save data!'));
            setTimeout(function(){ dispatch(saveBooksSuccess(null)); },2000);
        }
    }
}

export default saveBooks;