import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import { logout } from '../../actions/account/logoutActions';
import LogoutButton from '../../components/common/LogoutButton';

const CinemaStudioNavigationBar = ({
  logout,
  changePageToHome,
  changePageToMovies,
  changePageToCinemaStudiosStatistics,
  changePageToMoviesStatistics,
  changePageToJobAdvertisements,
  changePageToMessages,
  changePageToProfile
}) => {
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
          <NavItem
            eventKey={1}
            onClick={changePageToMovies}
          >
            Filmai
          </NavItem>
          <NavItem
            eventKey={2}
            onClick={changePageToCinemaStudiosStatistics}
          >
            Kino studijų statistika
          </NavItem>
          <NavItem
            eventKey={3}
            onClick={changePageToMoviesStatistics}
          >
            Filmų ataskaita
          </NavItem>
          <NavItem
            eventKey={4}
            onClick={changePageToJobAdvertisements}
          >
            Darbo skelbimai
          </NavItem>
          <NavItem
            eventKey={5}
            onClick={changePageToMessages}
          >
            Pranešimai
          </NavItem>
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

    changePageToMovies: () => {
      dispatch(push('/cinemaStudio/movies'));
    },

    changePageToCinemaStudiosStatistics() {
      dispatch(push('/cinemaStudio/statistics'));
    },

    changePageToMoviesStatistics() {
      dispatch(push('/cinemaStudio/moviesStatistics'));
    },

    changePageToJobAdvertisements() {
      dispatch(push('/cinemaStudio/jobAdvertisements'));
    },

    changePageToMessages() {
      dispatch(push('/cinemaStudio/messages'));
    },

    changePageToProfile: () => {
      dispatch(push('/profile'));
    },

    logout: () => {
      dispatch(logout());
    }
  };
}

export default connect(null, mapDispatchToProps)(CinemaStudioNavigationBar);