import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PropertyList extends Component {

  createTable() {
    let properties = this.props.properties
    return properties.length 
     ? <table className="table">
        <tbody>
          <tr>
            <th>Nickname</th>
            <th>Address</th> 
          </tr>
          {properties.map(p => 
            <tr key={p.id}>
              <td key={p.name}>{p.name}</td>
              <td key={p.address}>{p.address}</td>
              <td key={`${p.id}/details`}> <Link to={`/properties/${p.id}`}>details</Link> </td>
            </tr>
          )}
        </tbody>
      </table>
    : <strong> Loading Properties... </strong>
  }

  render() {
    return (
      <div>
         <h4>Properties List</h4>
         {this.createTable()}
         <Link to={`/new`}>Add a new property</Link>
      </div>
    );
  }
}

export default PropertyList;