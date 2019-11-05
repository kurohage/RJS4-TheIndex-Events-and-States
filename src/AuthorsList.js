import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
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

  state = {
    authors: this.props.authors
  };

  filterAuthors = query => {
    const searched = this.state.authors.filter(author => {
      return (author.first_name + author.last_name)
        .toLowerCase()
        .includes(query);
    });

    this.setState({ authors: searched });
  };

  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        author={author}
        key={author.first_name + author.last_name}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <SearchBar filterAuthors={this.filterAuthors} />
        <br />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
