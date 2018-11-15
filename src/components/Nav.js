import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      
        <nav className="row">
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <h1>MyProps Landlord App</h1>
          </div>
          <div className="navlinks col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <a href="/dash">Dashboard</a>
            <a href="/dash">Login</a>
          </div>
        </nav>

    );
  }
}

export default Nav;