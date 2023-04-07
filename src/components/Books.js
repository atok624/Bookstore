import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Books = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <div className="book-actions-container">
        <button type="button" onClick={() => dispatch(removeBook(book.id))}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
