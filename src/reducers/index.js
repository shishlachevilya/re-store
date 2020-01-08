const initialState = {
  books: [],
  isLoading: true,
  isError: null,
  cartItems: [],
  orderTotal: 220
};

const updateCardItem = (cartItems, item, index) => {
  if(item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ]
  }

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

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex((book) => book.id === bookId);
  const item = cartItems[itemIndex];
  let newItem;

  if(item) {
    newItem = {
      ...item,
      count: item.count + quantity,
      total: item.total + (quantity * book.price)
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
    cartItems: updateCardItem(state.cartItems, newItem, itemIndex)
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
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOK_REMOVE_FROM_CART':
      const item = state.cartItems.find(({id}) => id === action.payload);

      return updateOrder(state, action.payload, -item.count);
    default:
      return state
  }
};

export default reducer;
