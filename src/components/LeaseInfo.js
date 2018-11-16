import React, { Component } from 'react';
import LeaseAPI from '../api/LeaseAPI.js'
import { Redirect, Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
            <Button bsStyle="primary"> Edit </Button>{"  "}
            <Button bsStyle="primary" onClick={() => { if (window.confirm('Are you sure you wish to delete this lease?')) this._handleDelete(lease.id, index) } }> Delete </Button>
           
            
        </div>
      )}
        </div>  
      
    : <strong> Loading Lease info... </strong>
  }

  render() {
    // const { redirect } = this.state;
    //  if (redirect) {
    //   return <Redirect to = {`/properties/${this.props.propertyID}`} />
    //  }

       
    return (
      <div>
       <Card>
         <CardBody>
          <CardTitle><strong>Lease Details</strong></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>{this.renderLeases()}</CardText>
         
        </CardBody>
      </Card>
        <br/>
        
        
      </div>
    );
  }
}

export default PropertyDetails;