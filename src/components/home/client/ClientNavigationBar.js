import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { logout } from '../../../actions/account/logoutActions';
import LogoutButton from '../../common/LogoutButton';

const ClientNavigationBar = ({logout, changePageToHome, goToMovies, changePageToProfile, goToAnnouncements, goToOrders, goToVoting}) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="javascript:void(0)" onClick={changePageToHome}>Kino Pasaulis</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullLeft>
          <NavItem eventKey={1} onClick={goToOrders}> Mano užsakymai </NavItem>
        </Nav>
        <Nav pullLeft>
          <NavItem eventKey={1} onClick={goToAnnouncements}> Pranešimai </NavItem>
        </Nav>
        <Nav pullLeft>
          <NavItem eventKey={1} onClick={goToVoting}> Balsavimai </NavItem>
        </Nav>
        <Nav pullLeft>
          <NavItem eventKey={1} onClick={goToMovies}> Filmai </NavItem>
        </Nav>
        <Nav pullRight>
          <LogoutButton
            onLogout={logout}
            eventKey={1}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    changePageToHome() {
      dispatch(push('/home'));
    },

    changePageToProfile: () => {
      dispatch(push('/profile'));
    },

    goToAnnouncements: () => {
      dispatch(push('/announcements'));
    },

    goToMovies: () => {
      dispatch(push('/movies'));
    },

    goToOrders: () => {
      dispatch(push('/client/orders'));
    },

    goToVoting: () => {
      dispatch(push('/client/voting'));
    },

    logout: () => {
      dispatch(logout());
    }
  };
}

export default connect(null, mapDispatchToProps)(ClientNavigationBar);