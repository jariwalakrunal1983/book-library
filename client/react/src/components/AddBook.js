import React, { Component } from 'react';

class AddBook extends Component {
    state = {
        name: '', 
        description: '',
        count: '',
        author: '',
        isDisable: true
    }

    componentWillUpdate(nextProps, nextState) {
        let app = this;
        setTimeout(function(){
            if ( app.state.name.trim() === "" || 
                app.state.description.trim() === "" || 
                app.state.author.trim() === "" ) {
                    app.setState({isDisable: true});
            } else {
                app.setState({isDisable: false});
            }
        },100);
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    descriptionChangedHandler = (event) => {
        this.setState({description: event.target.value});
    }

    countChangedHandler = (event) => {
        this.setState({count: event.target.value});
    }

    authorChangedHandler = (event) => {
        this.setState({author: event.target.value});
    }

    addBookHandler = () => {
        this.props.add(this.state.name, this.state.description, this.state.count, this.state.author)
        this.setState({
            name: '', 
            description: '',
            count: '',
            author: '',
            isDisable: true
        })
    }

    render () {
        return (
            <div className="AddBook">
                <div className="BookFrom">
                    <h2>Add New Book</h2>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        onChange={this.nameChangedHandler}
                        value={this.state.name} />
                    <textarea 
                        type="text" 
                        rows="3"
                        placeholder="Description"
                        onChange={this.descriptionChangedHandler}
                        value={this.state.description} />
                    <input 
                        min="0"
                        type="number" 
                        placeholder="Count" 
                        onChange={this.countChangedHandler}
                        value={this.state.count} />
                    <input 
                        type="text" 
                        placeholder="Author" 
                        onChange={this.authorChangedHandler}
                        value={this.state.author} />
                </div>
                <button className="Btn BtnPrimary" 
                    disabled={this.state.isDisable} 
                    onClick={this.addBookHandler}>Add Book</button>
                <button className="Btn BtnSuccess" 
                    onClick={this.props.save}>Save Data</button>
            </div>
        );
    }
}

export default AddBook;