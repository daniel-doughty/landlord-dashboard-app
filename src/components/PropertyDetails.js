import React, { Component } from 'react';
import PropertyAPI from '../api/PropertyAPI.js'
import { Redirect, Link } from 'react-router';

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     redirect: false
    };
  }

  _handleDelete = () => {
    let propertyID = this.props.id;
    PropertyAPI.deleteProperty(propertyID)
    .then((apiResponseJSON) => 
    { this.setState({ redirect: true }) }
    )
  }

  _handleBack = () => {
    this.setState({ redirect: true })   
  }

  render() {
    const { redirect } = this.state;
     if (redirect) {
      return <Redirect to = "/dash" />
     }
     
    return (
      <div>
       
        <br/>
        <strong>Property Details</strong>
        <hr/>
         <strong>Name: </strong>
            {this.props.name}
            <br/>
            <strong>Address: </strong>
            {this.props.address}
            <hr/>
            <button onClick={ this._handleBack }> Back </button>
            <button> Edit </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this property?')) this._handleDelete() } }> Delete </button> 
      </div>
    );
  }
}

export default PropertyDetails;