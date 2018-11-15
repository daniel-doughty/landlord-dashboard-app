import React, { Component } from 'react';
import LeaseAPI from '../api/LeaseAPI.js'
import { Redirect, Link } from 'react-router';

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     redirect: false
    };
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
        <strong>Lease Details</strong>
        <hr/>
         <strong>Rent Amount: </strong>
            ${this.props.rent_amount}
            <br/>
            <strong>End Date: </strong>
            {this.props.end_date}
            <br/>
            <strong>Start Date: </strong>
            {this.props.beginning_date}
            <hr/>
            <button onClick={ this._handleBack }> Back </button>
            <button> Edit </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this property?')) this._handleDelete() } }> Delete </button> 
      </div>
    );
  }
}

export default PropertyDetails;