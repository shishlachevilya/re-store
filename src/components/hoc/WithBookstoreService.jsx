import React from 'react';
import {BookstoreServiceConsumer} from '../BookStoreServiseContext';

const WithBookstoreService = (props) => (Component) => {
  return (
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          return (
            <Component
              { ...props }
              bookstoreService={ bookstoreService }
            />
          )
        }
      }
    </BookstoreServiceConsumer>
  )
};

export default WithBookstoreService;