const GET_BOOKS = "GET_PRODUCTS";
const initialState = {
  books: [],
  status: null,
  error: false,
};

export const booksReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return state;
    default:
      return state;
  }
};

