import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import ListContainer from './list';
import FormContainer from './form';
import './App.scss';

class App extends Component {
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
        <BrowserRouter>
          <Route path="/" exact component={ListContainer} />
          <Route path="/users/:id" component={FormContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
