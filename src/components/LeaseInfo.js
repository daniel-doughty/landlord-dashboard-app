import React, { Component } from 'react';
import LeaseAPI from '../api/LeaseAPI.js'
import { Redirect, Link } from 'react-router-dom';

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     leases: [{}],
     redirect: false
    };
  }

  componentDidMount() {
    const propertyID = this.props.propertyID
    LeaseAPI.fetchLeasesByProperty(propertyID)
    .then((apiResponseJSON) => this.setState({
      leases: apiResponseJSON,
      }));
}

  _handleBack = () => {
    this.setState({ redirect: true })   
  }

  _handleDelete = (leaseID, index) => {
    console.log(leaseID, index)
    let newLeases = this.state.leases.splice(index, 1)
    this.setState({
      leases: newLeases
    })
    let propertyID = this.props.propertyID;
    LeaseAPI.deleteLease(propertyID, leaseID)
    .then(() => 
    this.renderLeases()
    )
  }

  renderLeases() {
    //const leases = this.sate.leases
    let leases = this.state.leases
    
    return leases.length 
     ? 
     <div>
      {leases.map((lease, index) => 
        <div>
          <strong>End Date: </strong>
            {lease.end_date}
            <br/>
            <strong>Start Date: </strong>
            {lease.beginning_date}
            <br/>
         <strong>Rent Amount: </strong>
         ${lease.rent_amount}
            <br/>
            <button> Edit </button>
            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this lease?')) this._handleDelete(lease.id, index) } }> Delete </button>
            <hr/> 
        </div>
      )}
        </div>  
      
    : <strong> Loading Properties... </strong>
  }

  render() {
    // const { redirect } = this.state;
    //  if (redirect) {
    //   return <Redirect to = {`/properties/${this.props.propertyID}`} />
    //  }

       
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