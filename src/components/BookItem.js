import { useSelector } from 'react-redux';
import Book from './Books';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
