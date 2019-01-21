import React from "react";
import PropTypes from "prop-types";

const BookSearchResult = ({ bookData, expandBook }) => {
  
  const bookTitle = bookData.best_book.title;

  return (
    <div className="row m-3">
      <div className="col-md-2 col-xs-4">
        <img src={bookData.best_book.image_url} alt="book thumbnail" height="200px" onClick={() => expandBook(bookData)} className="imgthumb"/>
          </div>
        <div className="col-md-10 col-xs-8">
          <p onClick={() => expandBook(bookData)} className="text-sm-left booktitle">
            {bookTitle}
          </p>
          <p className="text-sm-left">
           by {bookData.best_book.author.name}
          </p>

         
        </div>
    </div>
  );
};

BookSearchResult.propTypes = {
  bookData: PropTypes.object,
  expandBook: PropTypes.func
};

export default BookSearchResult;
