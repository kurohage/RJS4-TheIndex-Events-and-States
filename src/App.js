import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  ListOrDetail = () => {
    if (!this.state.currentAuthor)
      return (
        <AuthorsList
          authors={this.state.authors}
          selectAuthor={this.selectAuthor}
        />
      );
    else
      return (
        <AuthorDetail
          author={this.state.currentAuthor}
          key={this.state.currentAuthor.first_name}
        />
      );
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar selectAuthor={this.selectAuthor} />
          </div>
          <div className="content col-10">{this.ListOrDetail()}</div>
        </div>
      </div>
    );
  }
}

export default App;
