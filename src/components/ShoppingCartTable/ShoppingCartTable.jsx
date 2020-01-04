import React from 'react';
import {connect} from 'react-redux';
import {bookAddedToCart, bookRemoveFromCart, allBookRemoveFromCart} from '../../actions'
import './shopping-cart-table.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          items.map((item, i) => {
            const {id, title, count, total} = item;

            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button
                    onClick={() => onIncrease(id)}
                    className="btn btn-outline-success btn-sm">
                    <i className="fa fa-plus-circle"/>
                  </button>
                  <button
                    onClick={() => onDecrease(id)}
                    className="btn btn-outline-warning btn-sm">
                    <i className="fa fa-minus-circle"/>
                  </button>
                  <button
                    onClick={() => onDelete(id)}
                    className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o"/>
                  </button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: (id) => {
      dispatch(bookAddedToCart(id))
    },
    onDecrease: (id) => {
      dispatch(bookRemoveFromCart(id))
    },
    onDelete: (id) => {
      dispatch(allBookRemoveFromCart(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
