import React from 'react';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {fetchBooks} from '../../actions';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import BookList from './BookList';

class BookListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, isLoading, isError} = this.props;

    if(isLoading) {
      return <Spinner/>
    }

    if(isError) {
      return <ErrorIndicator/>
    }

    return (
      <BookList books={books}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    isLoading: state.isLoading,
    isError: state.isError
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
