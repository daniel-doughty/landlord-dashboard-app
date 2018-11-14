import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './PropertyList.css'

class PropertyList extends Component {

  createTable() {
    let properties = this.props.properties
    return properties.length 
     ? <table className="property-table">
        <tr>
          <th>Nickname</th>
          <th>Address</th> 
        </tr>
        
        {properties.map(p => 
          <tr>
            <td key={p.id}>{p.name}</td>
            <td key={p.id}>{p.address}</td>
            <td> <Link to={`/properties/${p.id}`}>details</Link> </td>
            <td> <Link to={`/properties/${p.id}/map`}>map</Link></td>
          </tr>
          )}
      </table>
    : <strong> Loading Properties... </strong>
  }

  render() {
    return (
      <div>
         <h4>Properties List</h4>
         <hr/>
         {this.createTable()}
         <hr/>
         <Link to={`/properties/new`}>Add a new property</Link>
      </div>
    );
  }
}

export default PropertyList;