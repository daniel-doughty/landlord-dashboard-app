import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem } from 'reactstrap';



class NavBar extends Component {
  
  render() {
    return (
      <nav>
      <Navbar color="dark" light expand="md">
            <NavLink href="/dash" active><h2><strong>MyProps Landlord App</strong></h2></NavLink>
          <div className="clearfix" style={{ padding: '.5rem' }}>
            
            <Button color="primary" href="/dash">Dashboard</Button>{' '}
            <Button color="primary" href="/dash">Login</Button>{' '}
          </div>
        
        </Navbar>
    </nav>
      

       
            
        //   </div>
        //   <div className="navlinks col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        //     <a href="/dash">Dashboard</a>
        //     <a href="/dash">Login</a>
        //   </div>
        // </nav> */


    );
  }
}

export default NavBar;