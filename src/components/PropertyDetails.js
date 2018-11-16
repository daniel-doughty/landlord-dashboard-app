import React, { Component } from 'react';
import PropertyAPI from '../api/PropertyAPI.js'
import { Redirect, Link } from 'react-router';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

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
       
        {/* <br/>
        <strong>Property Details</strong>
        <hr/>
         <strong>Name: </strong>
            {this.props.name}
            <br/>
            
            <hr/>
            <Button bsStyle="primary" onClick={ this._handleBack }> Back </Button>
            <Button bsStyle="primary"> Edit </Button>
            <Button bsStyle="primary" onClick={() => { if (window.confirm('Are you sure you wish to delete this property?')) this._handleDelete() } }> Delete </Button>  */}

       <Card>
         <CardBody>
          <CardTitle><strong>Property Details</strong></CardTitle>
          <CardSubtitle> <strong>Name:{"   "}</strong>{this.props.name} </CardSubtitle>
          <CardText><strong>Address: </strong>
            {this.props.address}</CardText>
            <Button bsStyle="primary" onClick={ this._handleBack }> Back </Button>{"   "}
            <Button bsStyle="primary"> Edit </Button>{"   "}
            <Button bsStyle="primary" onClick={() => { if (window.confirm('Are you sure you wish to delete this property?')) this._handleDelete() } }> Delete </Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default PropertyDetails;