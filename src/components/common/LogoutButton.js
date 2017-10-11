import React from 'react';
import { NavItem } from 'react-bootstrap';

const LogoutButton = ({onLogout, eventKey}) => {
  return (
    <NavItem eventKey={eventKey} onClick={onLogout}>
      Atsijungti
    </NavItem>
  )
};

export default LogoutButton;