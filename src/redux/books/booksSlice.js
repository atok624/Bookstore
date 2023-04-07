import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rrL1g07ondrVJn6Pa9qt/books';
const initialState = {
  books: [],
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something is wrong');
  }
});
export const postBook = createAsyncThunk('books/postBook', async (data) => {
  try {
    const response = await axios.post(url, data);
    return {
      mesage: response.data,
      data,
    };
  } catch (error) {
    return error;
  }
});
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books: filteredBooks };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const booksObj = action.payload;
        const bookIdArray = Object.keys(booksObj);
        const books = bookIdArray.map((bookId) => ({
          item_id: bookId,
          title: booksObj[bookId][0].title,
          author: booksObj[bookId][0].author,
          category: booksObj[bookId][0].category,
        }));
        return { ...state, books };
      })
      .addCase(postBook.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.books = [action.payload.data, ...IsFulfilled.books];
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
        return { ...state, books: filteredBooks };
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
