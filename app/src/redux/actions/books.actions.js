const GET_BOOKS = "GET_PRODUCTS";

export const getBooks = (books) => {
    return {
        type: GET_BOOKS,
        payload : books
    }
}

