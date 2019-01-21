import React, { Component } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

const apiKey = process.env.REACT_APP_API_KEY;

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Loading description...",
      error: ""
    };
  }

  componentDidMount() {
    this.getDescription();
  }

  getDescription = () => {
    const bookId = this.props.bookData.best_book.id;
    const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;
    Axios.get(requestUri)
      .then(res => {
        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(res.data, "application/xml");

        const parseError = XMLResponse.getElementsByTagName("parsererror");

        if (parseError.length) {
          this.setState({
            error: "Error in loading description"
          });
        } else {
          let description = XMLResponse.getElementsByTagName("description")[0]
            .innerHTML;

          description = description.replace("<![CDATA[", "").replace("]]>", "");

          if (!description) {
            description = "No description found";
          }
          this.setState({ description });
        }
      })
      .catch(error => {
        this.setState({
          error: error.toString()
        });
      });
  };

  render() {
    const { bookData } = this.props;
    return (
      <div>
        <button className="btn book" onClick={this.props.collapseBook}>
          {"Back"}
        </button>

     
        <div className="row mt-5">
        <div className="col-lg-3 col-sm-4">
          <img src={bookData.best_book.image_url} alt="Book Large" height="300px" width="200px"
          />
          </div>
          <div className="col-lg-9 col-sm-8">
             <h2>{bookData.best_book.title}</h2>
          <p>
            by:{" "}
            <span>
              {bookData.best_book.author.name}
            </span>
          </p>
          <p><strong>Rating:{bookData.average_rating}</strong> </p>

           {(this.state.error && (
            <p className="text-danger">{this.state.error}</p>
          )) || (
            <p dangerouslySetInnerHTML={{ __html: this.state.description }} />
          )}
        </div>
        
         
        </div>
        
      </div>
    );
  }
}

BookDetails.propTypes = {
  bookData: PropTypes.object,
  collapseBook: PropTypes.func
};

export default BookDetails;
