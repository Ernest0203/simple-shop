import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h3>Result:</h3>
          <div className="result-window">
            
          </div>
          <div className="buttons">
            <a href="" className="button">Get list</a>
            <a href="" className="button">Add item</a>
            <a href="" className="button">Delete item</a>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
