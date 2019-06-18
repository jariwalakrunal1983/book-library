import {fecthBooksPending, fecthBooksSuccess, fecthBooksError} from './actions';
import axios from 'axios';

const demoData = [
    { 
        id: 1, 
        name: 'Learning React: Functional Web Development with React and Redux', 
        description: 'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, youíll learn how to work with functional programming and the latest ECMAScript features. Developed by Facebook and used by companies including Netflix, Walmart and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, youíll fully understand how useful React can be in your organization.',
        count: 5,
        author: 'Alex Banks & Eve Porcello'
    },
    { 
        id: 2, 
        name: 'React.js Book: Learning React JavaScript Library From Scratch', 
        description: 'My fourth web development book is simply called React.js Book. It will walk you step by step through the process of setting up a development environment and learning Reactive programming from start to finish. React is a library unlike any other I have worked with. Unlike jQuery where you had to learn a number of methods that do very specific things, it is largely inspired by a programming methodology for creating fast web applications.',
        count: 2,
        author: 'Greg Sidelnikov'
    },
]

function fecthBooks() {
    return dispatch => {
        if(process.env.NODE_ENV === 'development') {
            dispatch(fecthBooksSuccess(demoData));
        } else {
            dispatch(fecthBooksPending());
            axios.get('api/data')
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fecthBooksSuccess(res.data));
                return res;
            })
            .catch(error => {
                dispatch(fecthBooksError(error));
            })
        }
    }
}

export default fecthBooks;