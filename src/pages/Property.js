import React, { Component } from 'react';
import PropertyAPI from '../api/PropertyAPI.js'
import LeaseAPI from '../api/LeaseAPI.js'
import { Redirect } from 'react-router';
import PropertyDetails from '../components/PropertyDetails'
import LeaseInfo from '../components/LeaseInfo'

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      leases: [{}],
      redirect: false
    };
  }

  componentDidMount() {
    let propertyID = this.props.match.params.propertyID;
    PropertyAPI.fetchPropertyByID(propertyID)
      .then((apiResponseJSON) => this.setState({
        property: apiResponseJSON,
        }));
    LeaseAPI.fetchLeasesByProperty(propertyID)
      .then((apiResponseJSON) => this.setState({
        leases: apiResponseJSON,
        }));
    }



  render() {
    const { id, name, address } = this.state.property
   
    
    return name
    ?    
    <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 grey">
            <PropertyDetails id={id} name={name} address={address}/>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 pink">
            Required Maintenance
           </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 aqua">
          <LeaseInfo leases={this.state.leases} propertyID={id}/>  
          </div>
          <div className="map-responsive col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 salmon">
              <iframe 
                  src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyAi37elBB54yfpLIz_3FZoPCK0FGlFpSl8`}
                  allowfullscreen>
              </iframe>
            </div>
        </div>
    </div>
       
      //  {/* <button onClick={this._handleDelete}>Delete Property</button>
      //  <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel() } } /> */}

     
    :
    <div>
      Loading property...
    </div>
  }
}

export default Property;