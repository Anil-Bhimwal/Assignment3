import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ backgroundColor: '#41444a', color: '#ffffff' }} variant="dark" light expand="md">
                <NavbarBrand style={{ color: '#ffffff', fontStyle: "italic" }} href="/">
                    <img src="assets/images/logo.png" height="40" width="100" alt="Continuous Food" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link"to="/home" style={{ color: '#ffffff' }} >Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"to="/menu" style={{ color: '#ffffff' }} >Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"to="/about" style={{ color: '#ffffff' }} >About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"to="/contact" style={{ color: '#ffffff' }} >Contact Us</NavLink>
                        </NavItem>
                        <UncontrolledDropdown style={{ backgroundColor: '#41444a' }} nav inNavbar>
                            <DropdownToggle style={{ backgroundColor: '#41444a', color: '#ffffff' }} nav caret>
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
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={props.toggleModal} style={{ color: '#ffffff', marginTop:"5px" }}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;