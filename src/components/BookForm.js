import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getBooks, postBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const category = 'fiction';
      dispatch(postBook({
        item_id: nanoid(), title, author, category,
      })).then((res) => {
        console.log(res);
      });
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-book-wrapper">
      <div className="horizontal-divider" />
      <h2 className="add-book-header">ADD NEW BOOK</h2>
      <form className="add-book" onSubmit={handleSubmit}>
        <input
          className="book-title-input"
          type="text"
          placeholder=" Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="book-author-input"
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button className="add-book-button" type="submit">Add Book</button>
      </form>
    </div>

  );
};

export default BookForm;
