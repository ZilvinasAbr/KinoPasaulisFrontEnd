import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

const LoggedOfNavigationBar = ({changePageToLanding, changePageToLogin, changePageToRegister}) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="javascript:void(0)" onClick={changePageToLanding}>Kino Pasaulis</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={changePageToLogin}>Prisijungti</NavItem>
          <NavItem eventKey={2} onClick={changePageToRegister}>Registruotis</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LoggedOfNavigationBar;