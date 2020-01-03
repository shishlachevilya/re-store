import React from 'react';
import BookListItem from '../BookListItem';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './book-list.css';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

class BookList extends React.Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequest, booksError } = this.props;
    booksRequest();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error));
  }

  render() {
    const { books, isLoading, isError } = this.props;

    if(isLoading) {
      return <Spinner/>
    }

    if(isError) {
      return <ErrorIndicator/>
    }

    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={ book.id }>
                <BookListItem book={ book }/>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    isLoading: state.isLoading,
    isError: state.isError
  }
};

const mapDispatchToProps = (dispatch) => {
  const {booksLoaded, booksRequest, booksError} = bindActionCreators(actions, dispatch);

  return{
    booksLoaded,
    booksRequest,
    booksError
  }
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
