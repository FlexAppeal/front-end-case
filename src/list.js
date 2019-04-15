import React, { Component } from 'react';
import { Link } from "react-router-dom";
import fetchUsers from './api/fetch-users';

class ListContainer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    // Fetch data from the API
  }

  render() {
    // Create list of users
    return (
      <div className="App">
        <div>List container</div>

        <Link to="/users/1">Link to form</Link>
      </div>
    );
  }
}

export default ListContainer;
