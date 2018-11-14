import React, { Component } from 'react';
import PropertyAPI from '../api/PropertyAPI.js'
import './Property.css'

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.propertyID;
    PropertyAPI.fetchPropertyByID(id)
      .then((property) => this.setState({
        property: property
    }));
  }

  render() {
    return this.state.property['name']
    ? 
    <div>
       {this.state.property['name']}
     </div>
    :
    <div>
      Loading property...
    </div>
  }
}

export default Property;