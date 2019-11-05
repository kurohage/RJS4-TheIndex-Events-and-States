import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    const author = this.props.author;
    const authorName = `${this.props.author.first_name} ${this.props.author.last_name}`;

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={author.imageUrl}
              alt={authorName}
            />
          </div>
          <div
            className="card-body"
            onClick={() => this.props.selectAuthor(author)}
          >
            <h5 className="card-title">
              <span>{authorName}</span>
            </h5>
            <small className="card-text">{author.books.length} books</small>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;
