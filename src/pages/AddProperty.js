import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropertyAPI from '../api/PropertyAPI.js'
import { Redirect } from 'react-router';

class addProperty extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  handleSubmit(event){
    event.preventDefault();
    const propertyObject = {
      name: event.target.elements[0].value,
      address: event.target.elements[1].value,
    }
    PropertyAPI.addProperty(propertyObject)
    .then((response) => { this.setState({ redirect: true }) })
}

  

  render() {
    const { redirect } = this.state;
     if (redirect) {
      return <Redirect to = "/dash" />
     }
    return(     
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <ControlLabel>Nickname</ControlLabel>
            <FormControl type="text" />
            <ControlLabel>Address</ControlLabel>
            <FormControl type="text" />  
            <br/>          
            <Button bsStyle="primary" type="submit">Submit</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default addProperty;