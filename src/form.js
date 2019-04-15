import React, { Component } from 'react';
import { Link } from "react-router-dom";
import updateUser from './api/update-user';

class ListContainer extends Component {
  async handleSubmit() {
    // updateUser(payload)
  }

  render() {
    // Create a form
    const { match: { params } } = this.props;

    return (
      <React.Fragment>
        <Link to="/">Back</Link>
        <form>
          Form for user {params.id}
        </form>
      </React.Fragment>
    );
  }
}

export default ListContainer;
