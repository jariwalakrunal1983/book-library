import React, { Component } from 'react';

class Book extends Component {

    state = {
        isEditMode: false,
        showMore: false,
        descriptionClass: 'Description Short'
    }

    toggleEditModeHandler = (event,index) => {
        this.setState({ isEditMode: !this.state.isEditMode });
    }

    showMoreToggleHandler = () => {
        if (this.state.showMore !== true)
            this.setState({ descriptionClass: 'Description' });
        else
            this.setState({ descriptionClass: 'Description Short' });
        this.setState({ showMore: !this.state.showMore });
    }

    render () {
        return (
            <div className="Book">
                {
                    this.state.isEditMode ? 
                        <div>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                onChange={this.props.nameChange}
                                value={this.props.name} />
                            <textarea 
                                type="text" 
                                rows="3"
                                placeholder="Description"
                                onChange={this.props.descriptionChange}
                                value={this.props.description} />
                            <input 
                                min="0"
                                type="number" 
                                placeholder="Count" 
                                onChange={this.props.countChange}
                                value={this.props.count} />
                            <input 
                                type="text" 
                                placeholder="Author" 
                                onChange={this.props.authorChange}
                                value={this.props.author} />
                            <button className="SaveBtn" onClick={() => this.toggleEditModeHandler()}>Save</button>
                        </div> :
                        <div>
                            <h2 className="Title">{this.props.name}</h2>
                            <small className="OtherInfo">Author: {this.props.author}, Qty: {this.props.count}</small>
                            <p className={this.state.descriptionClass}>{this.props.description}</p>
                            <button className="ShowMoreBtn Btn BtnDefault" onClick={() => this.showMoreToggleHandler()}>
                                { this.state.showMore ? 'Hide Detail' : 'Show Detail' }
                            </button>
                            <button className="Btn BtnInfo" onClick={() => this.toggleEditModeHandler()}>Edit</button>
                            <button className="Btn BtnDanger" onClick={this.props.remove}>Remove</button>
                        </div>
                }
            </div>
        )
    }
}

export default Book;