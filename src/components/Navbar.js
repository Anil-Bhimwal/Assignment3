import React, { useState } from 'react';
import {
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
  DropdownItem
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  style={{backgroundColor:'#41444a' ,color: '#ffffff'}} variant="dark"light expand="md">
        <NavbarBrand style={{color: '#ffffff', fontStyle:"italic"}}href="/">
            <img src="assets/images/logo.png" height="40" width="50" alt="Continuous Food" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: '#ffffff'}} href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#ffffff'}} href="/menu">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#ffffff'}} href="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: '#ffffff'}} href="">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown style={{backgroundColor:'#41444a'}} nav inNavbar>
              <DropdownToggle style={{backgroundColor:'#41444a' ,color: '#ffffff'}} nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  Beverages
                </DropdownItem>
                <DropdownItem > 
                  Lunch Items
                </DropdownItem>
                <DropdownItem >
                  Dinner
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;