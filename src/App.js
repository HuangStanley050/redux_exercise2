import React, { Component } from 'react';
import Add from "./components/add.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Exercise</h1>
        <Add/>
      </div>
    );
  }
}

export default App;
