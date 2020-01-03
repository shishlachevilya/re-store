import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className='book-list-item'>
      <div className='book-cover'>
        <img src={coverImage} alt={title} />
      </div>

      <div className='book-details'>
        <div className='book-title'>{title}</div>
        <div className='book-author'>{author}</div>
        <div className='book-price'>${price}</div>
        <button className='btn btn-info add-to-cart'>add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
