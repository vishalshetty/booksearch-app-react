import React from "react";
import BookSearchResult from "./BookSearchResult";
import PropTypes from "prop-types";

const AllResults = ({ books, expandBook }) => {
  return (
    <div>
      {books.map(book => (
        <BookSearchResult bookData={book} key={book.id} expandBook={expandBook} />
      ))}
    </div>
  );
};

AllResults.propTypes = {
  books: PropTypes.array,
  expandBook: PropTypes.func
};

export default AllResults;
