import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Books';
import { getBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  // console.log(books);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
