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
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/">Continuous Food </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Beverages
                </DropdownItem>
                <DropdownItem>
                  Lunch Items
                </DropdownItem>
                <DropdownItem>
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