import React, { Component } from 'react';
import './Dash.css';
import PropertyList from './PropertyList.js'
import PropertyAPI from '../api/PropertyAPI.js';

class Dash extends Component {
  constructor(props){
    super(props);
    this.state = {
      properties: []
    }
  }

  componentWillMount() {
    PropertyAPI.fetchProperties()
      .then((apiResponseJSON) => {
        this.setState({
          properties: apiResponseJSON
        })
      })
  }

  render() {
    return (
      <div className="row-container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 grey">
            <PropertyList properties={this.state.properties} />
          </div>
          
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 salmon">
            <h4>Rent</h4>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 pink">
          <h4>To Do's</h4>
          </div>
      
        <div className="grid-container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 aqua">
          <h4>Cash Flow</h4>
          <br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>

      
    
    );
  }
}

export default Dash;