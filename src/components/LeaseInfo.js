import React, { Component } from 'react';
import LeaseAPI from '../api/LeaseAPI.js'
import { Redirect, Link } from 'react-router-dom';

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

  _handleDelete = (leaseID) => {
    let propertyID = this.props.propertyID;
    LeaseAPI.deleteLease(propertyID, leaseID)
    .then(() => 
    { this.setState({ redirect: true }) }
    )
  }

  renderLeases() {
    let leases = this.props.leases
    
    return leases.length 
     ? 
     <div>
      {leases.map(l => 
        <div>
          <strong>End Date: </strong>
            {l.end_date}
            <br/>
            <strong>Start Date: </strong>
            {l.beginning_date}
            <br/>
         <strong>Rent Amount: </strong>
         ${l.rent_amount}
            <br/>
            <button> Edit </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this lease?')) this._handleDelete(l.id) } }> Delete </button>
            <hr/> 
        </div>
        )}
      </div>    
    : <strong> Loading Properties... </strong>
  }

  render() {
    const { redirect } = this.state;
     if (redirect) {
      return <Redirect to = {`/properties/${this.props.propertyID}`} />
     }

     
     const {beginning_date, end_date, rent_amount } = this.props.leases[0] 
     
    return (
      <div>
        <br/>
        <strong>Lease Details</strong>
        <hr/>
        {this.renderLeases()}
        <hr/>
        <button onClick={ this._handleBack }> Back </button>
      </div>
    );
  }
}

export default PropertyDetails;