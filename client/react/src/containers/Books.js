import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from '../components/Book';
import AddBook from '../components/AddBook';

import * as actionTypes from '../store/actions';
import fetchBooksData from '../store/fetchBooksData';
import saveBooksData from '../store/saveBooksData';

class Books extends Component {
    state = {
        searchValue: '',
        hasSearchValue: false,
    }

    componentWillMount() {
        this.props.fetchBooks();
    }

    filterByValue = (obj) =>{
        if (this.state.searchValue.trim() === '') return true;
        return Object.keys(obj).some(k => obj[k].toString().toLowerCase().includes(this.state.searchValue.toLowerCase()));
    }

    searchBookHandler = (event) => {
        if(event.target.value.trim() === ''){
            this.setState({hasSearchValue: false, searchValue: event.target.value})
        } else {
            this.setState({hasSearchValue: true, searchValue: event.target.value})
        }
    }

    render () {

        if (this.props.pending) return (<span>Loading</span>);

        return (
            <div className="Books">
                <div className="Left">
                    <AddBook add={this.props.onAddBook} save={() => {this.props.saveBooks(this.props.books)}}/>
                </div>
                <div className="Right">
                    { this.props.message !== null ? <span className="Message">{this.props.message}</span> : '' }
                    { this.props.hasError !== null ? <span className="Error">{this.props.hasError}</span> : '' }
                    <input 
                        type="text" placeholder="Search" className="SearchBar"
                        value={this.state.searchValue} 
                        onChange={(event) => this.searchBookHandler(event)}/>
                    {
                        this.props.books.map(book => { 
                            return this.filterByValue(book) ? (
                            <Book 
                                key={book.id}
                                name={book.name} 
                                description={book.description} 
                                count={book.count} 
                                author={book.author} 
                                nameChange={(event) => this.props.onBookNameChange(book.id, event.target.value)}
                                descriptionChange={(event) => this.props.onBookDescriptionChange(book.id, event.target.value)}
                                countChange={(event) => this.props.onBookCountChange(book.id, event.target.value)}
                                authorChange={(event) => this.props.onBookAuthorChange(book.id, event.target.value)}
                                remove={() => this.props.onRemoveBook(book.id)}/>
                        ): ''}) 
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPending: state.isPending,
        hasError: state.hasError,
        message: state.message,
        books: state.books
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveBook: (id) => dispatch({type: actionTypes.REMOVE_BOOK, id: id}),
        onAddBook: (name, description, count, author) => dispatch({type: actionTypes.ADD_BOOK, data: {name: name, description: description, count: count, author: author}}),
        onBookNameChange: (id, name) => dispatch({type: actionTypes.BOOK_NAME_CHANGE, data: {id: id, name: name}}),
        onBookDescriptionChange: (id, description) => dispatch({type: actionTypes.BOOK_DESCRIPTION_CHANGE, data: {id: id, description: description}}),
        onBookCountChange: (id, count) => dispatch({type: actionTypes.BOOK_COUNT_CHANGE, data: {id: id, count: count}}),
        onBookAuthorChange: (id, author) => dispatch({type: actionTypes.BOOK_AUTHOR_CHANGE, data: {id: id, author: author}}),
        saveBooks: (books) => dispatch(saveBooksData(books)),
        fetchBooks: () => dispatch(fetchBooksData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);