const initialState = {
  books: [],
  isLoading: true,
  isError: null,
  cartItems: [],
  orderTotal: 220
};

const updateCardItems = (cartItems, item, index) => {
  if(index === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ]
};

const updateOrder = (state, bookId) => {
  const {books, cartItems} = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((book) => book.id === bookId);
  const item = cartItems[itemIndex];
  let newItem;

  if(item) {
    newItem = {
      ...item,
      count: item.count + 1,
      total: book.price + item.total
    }
  } else {
    newItem = {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    }
  }

  return {
    ...state,
    cartItems: updateCardItems(state.cartItems, newItem, itemIndex)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        isError: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload);

    case 'BOOK_REMOVE_FROM_CART':
      return {
        ...state
      };
    default:
      return state
  }
};

export default reducer;
