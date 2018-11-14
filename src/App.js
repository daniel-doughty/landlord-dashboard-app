import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Dash from './components/Dash'
import Property from './components/Property' 
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
         <BrowserRouter>
          <div>
            <Route exact path="/dash" component={ Dash } />
            <Route exact path="/properties/:propertyID" component={ Property } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
