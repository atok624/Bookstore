import React from 'react';
import MyBook from './bookItem.js';
import Form from './bookForm.js';

function Books() {
  const Books = [
    {
      author: 'Kofi Adzor',
      title: 'The Power of a woman',
    },
    {
      author: 'Nicholas Amissah',
      title: 'The Lion King',
    },
  ];
  return (
    <div className="book-container">
      <div className="books-list">
        {Books.map((book) => (
          <div key={Books.indexOf(book)} className="book-item">
            <div className="first-section">
              <MyBook title={book.title} author={book.author} />
              <br />
              <div className="book-option">
                <button type="button" className="comments-btn">
                  Comments
                </button>
                <div className="divider" />
                <button type="button" className="remove-btn">
                  Removed
                </button>
                <div className="divider" />
                <button type="button" className="edit-btn">
                  Edit
                </button>
              </div>
            </div>
            <div className="second-section">
              <p>50% completed</p>
            </div>
            <div className="divider" />
            <div className="Third-section">
              <p>CURRENT CHAPTER</p>
              <p>CHAPTER 24</p>
              <br />
              <button type="button" className="update-progress">
                UPDATE PROGRESS
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <Form />
    </div>
  );
}

export default Books;
