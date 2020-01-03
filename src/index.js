import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import BookStoreService from './services/book-store-service';
import {Provider} from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary';
import {BookstoreServiceProvider} from './components/BookStoreServiseContext';
import App from './components/App';

const bookstoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
