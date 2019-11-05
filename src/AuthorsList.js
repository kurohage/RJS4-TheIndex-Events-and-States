import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
//import AuthorDetail from "./AuthorDetail";

class AuthorsList extends Component {
  /*
  // old code that printed unique details per card. This is not what the task is asking, though.
  const authorCards = props.authors.map(
    author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />,
      (
        <AuthorDetail
          author={author}
          key={author.first_name + author.last_name}
        />
      )
    )
  );
  */
  authorCards = this.props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={this.props.selectAuthor}
    />
  ));

  render() {
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{this.authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
