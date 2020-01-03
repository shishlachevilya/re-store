const initialState = {
  books: [],
  isLoading: true,
  isError: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BOOKS_REQUEST':
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        isError: null
      };
    case 'BOOKS_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      };
    default:
      return state
  }
};

export default reducer;
