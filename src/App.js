import React, { Component } from "react";
import Search from "./components/Search";
import BookDetails from "./components/BookDetails";

class App extends Component {
  state = {
    results: [],
    expandedBook: null
  };

  setResults = results => {
    this.setState({ results });
  };

  collapseBook = () => {
    this.setState({
      expandedBook: null
    });
  };

  expandBook = expandedBook => {
    this.setState({ expandedBook });
  };

  render() {
    return (
      <div className="container">
        <div className="mt-5 mx-auto srch">
          <h4>Search Books</h4>
        </div>
        <div>
          {this.state.expandedBook ? (
            <BookDetails
              bookData={this.state.expandedBook}
              collapseBook={this.collapseBook}
            />
          ) : (
            <Search
              results={this.state.results}
              setResults={this.setResults}
              expandBook={this.expandBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;