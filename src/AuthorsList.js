import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import AuthorDetail from "./AuthorDetail";

function AuthorsList(props) {
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

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
