import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// If the application state ever changes, the container will automatically re-render with props updated
function mapStateToProps(state) {
    // Whatever returned will show up at props inside of BookList
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);