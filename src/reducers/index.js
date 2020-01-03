const initialState = {
  books: [],
  isLoading: true,
  isError: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state
  }
};

export default reducer;
