import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Dash from './pages/Dash'
import Property from './pages/Property' 
import NewProperty from './pages/AddProperty'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        
         <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/dash" component={ Dash } />
            <Route exact path="/new" component={ NewProperty } />
            <Route exact path="/properties/:propertyID" component={ Property } />
            
            

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
