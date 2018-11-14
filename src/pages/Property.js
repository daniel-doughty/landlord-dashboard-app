import React, { Component } from 'react';
import PropertyAPI from '../api/PropertyAPI.js'
import { Redirect } from 'react-router';
import './Property.css'

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: {},
      redirect: false
    };
  }

  componentDidMount() {
    let propertyID = this.props.match.params.propertyID;
    PropertyAPI.fetchPropertyByID(propertyID)
      .then((apiResponseJSON) => this.setState({
        property: apiResponseJSON,
        }));
    }

  _handleDelete = () => {

    let propertyID = this.props.match.params.propertyID;
    PropertyAPI.deleteProperty(propertyID)
    .then((apiResponseJSON) => 
    { this.setState({ redirect: true }) }
    )
  }

  render() {
    const { redirect } = this.state;
     if (redirect) {
      return <Redirect to = "/dash" />
     }
     
     const { name, address } = this.state.property
     console.log(name)
     console.log(address)

    return name
    ?    
    <div>
       <strong>Property: </strong>
       {name}
       <br/>
       <strong>Address: </strong>
       {address}

      <button onClick={() => { if (window.confirm('Are you sure you wish to delete this property?')) this._handleDelete() } }> 
        Delete 
      </button>
      
       <br/><hr/>
     
       <iframe width="300" height="225" frameborder="0" 
          src={`https://www.google.com/maps/embed/v1/place?q=${address}&key=AIzaSyAi37elBB54yfpLIz_3FZoPCK0FGlFpSl8`}
          allowfullscreen>
       </iframe>
       

       {/* <button onClick={this._handleDelete}>Delete Property</button>
       <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel() } } /> */}

     </div>
    :
    <div>
      Loading property...
    </div>
  }
}

export default Property;