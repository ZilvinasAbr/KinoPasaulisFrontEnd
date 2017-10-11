import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer, initialState} from './reducers/index';
// import HomePage from './components/home/HomePage';
import LandingPage from './components/landing/LandingPage';
import LoginPage from './components/login/LoginPage';
// import RegisterPage from './components/register/RegisterPage';
// import CinemaStudioRegisterPage from './components/register/cinemaStudio/CinemaStudioRegisterPage';
// import TheatherRegisterPage from './components/register/theather/TheatherRegisterPage';
// import MovieCreatorRegisterPage from './components/register/movieCreator/MovieCreatorRegisterPage';
// import VotesAdminRegisterPage from './components/register/votesAdmin/VotesAdminRegisterPage';
// import ClientRegisterPage from './components/register/client/ClientRegisterPage';
// import Auditoriums from './components/home/theather/auditoriums/Auditoriums';
// import Events from './components/home/theather/events/Events';
// import Subscriptions from './components/home/theather/Subscriptions';
// import NewEvent from './components/home/theather/events/NewEvent';
// import EventDetails from './components/home/theather/events/EventDetails';
// import Theathers from './components/home/Theathers';
// import EventDetails2 from './components/home/EventDetails';
// import Movies from './components/home/Movies';
// import MoviesDetail from './components/home/MoviesDetail';
// import MoviesPage from './cinemaStudio/components/movies/MoviesPage';
// import AddMoviePage from './cinemaStudio/components/movies/addMovie/AddMoviePage';
// import EditMoviePage from './cinemaStudio/components/movies/editMovie/EditMoviePage';
// import CinemaStudiosStatisticsPage from './cinemaStudio/components/CinemaStudiosStatisticsPage';
// import CinemaStudiosMoviesStatisticsPage from './cinemaStudio/components/movies/MoviesStatisticsPage';
// import JobAdvertisementsPage from './cinemaStudio/components/jobAdvertisements/JobAdvertisementsPage';
// import AddJobAdvertisementPage from './cinemaStudio/components/jobAdvertisements/addJobAdvertisement/AddJobAdvertisementPage';
// import MoviePage from './cinemaStudio/components/movies/moviePage/MoviePage';
// import MessagesPage from './cinemaStudio/components/messages/MessagesPage';
// import TaggedMoviesPage from './components/home/movieCreator/TaggedMoviesPage';
// import PendingMoviesPage from './components/home/movieCreator/PendingMoviesPage';
// import JobOffersPage from './components/home/movieCreator/JobOffersPage';
// import AnnouncementsPage from './components/home/AnnouncementsPage';
// import Votings from './components/home/votesAdmin/votings/Votings';
// import AddVotingPage from './components/home/votesAdmin/votings/AddVotingPage';
// import Orders from './components/home/client/Orders';
// import AwardsPage from './components/home/movieCreator/AwardsPage';
// import Voting from './components/home/client/Voting';
// import AwardsStatisticsPage from './components/home/movieCreator/AwardsStatisticsPage';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(routerMiddleware(browserHistory), thunkMiddleware)
));

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */}
    <Router history={history}>
      <Route path="/" component={LandingPage}/>
      {/*<Route path="home" component={HomePage}/>*/}
      {/*<Route path="register" component={RegisterPage}/>*/}
      {/*<Route path="register/cinemastudio" component={CinemaStudioRegisterPage}/>*/}
      {/*<Route path="register/theather" component={TheatherRegisterPage}/>*/}
      {/*<Route path="register/moviecreator" component={MovieCreatorRegisterPage}/>*/}
      {/*<Route path="register/votesadmin" component={VotesAdminRegisterPage}/>*/}
      {/*<Route path="register/client" component={ClientRegisterPage}/>*/}
      <Route path="login" component={LoginPage}/>
      {/*<Route path="theather/auditoriums" component={Auditoriums}/>*/}
      {/*<Route path="theather/events" component={Events}/>*/}
      {/*<Route path="theather/subscriptions" component={Subscriptions}/>*/}
      {/*<Route path="theather/newEvent" component={NewEvent}/>*/}
      {/*<Route path="theather/eventDetails/:id" component={EventDetails}/>*/}
      {/*<Route path="cinemaStudio/movies" component={MoviesPage}/>*/}
      {/*<Route path="cinemaStudio/movie/:id" component={MoviePage}/>*/}
      {/*<Route path="cinemaStudio/editMovie/:id" component={EditMoviePage}/>*/}
      {/*<Route path="cinemaStudio/addMovie" component={AddMoviePage}/>*/}
      {/*<Route path="cinemaStudio/statistics" component={CinemaStudiosStatisticsPage}/>*/}
      {/*<Route path="cinemaStudio/moviesStatistics" component={CinemaStudiosMoviesStatisticsPage}/>*/}
      {/*<Route path="cinemaStudio/jobAdvertisements" component={JobAdvertisementsPage}/>*/}
      {/*<Route path="cinemaStudio/addJobAdvertisement" component={AddJobAdvertisementPage}/>*/}
      {/*<Route path="cinemaStudio/messages" component={MessagesPage}/>*/}
      {/*<Route path="theathers/:id" component={Theathers}/>*/}
      {/*<Route path="eventDetails/:id" component={EventDetails2}/>*/}
      {/*<Route path="movies" component={Movies}/>*/}
      {/*<Route path="movie/:id" component={MoviesDetail}/>*/}
      {/*<Route path="announcements" component={AnnouncementsPage}/>*/}
      {/*<Route path="movieCreator/taggedMovies" component={TaggedMoviesPage}/>*/}
      {/*<Route path="movieCreator/pendingMovies" component={PendingMoviesPage}/>*/}
      {/*<Route path="movieCreator/awards" component={AwardsPage}/>*/}
      {/*<Route path="movieCreator/jobOffers" component={JobOffersPage}/>*/}
      {/*<Route path="movieCreator/awardsStatistics" component={AwardsStatisticsPage}/>*/}
      {/*<Route path="votesAdmin/votings" component={Votings}/>*/}
      {/*<Route path="votesAdmin/addvoting" component={AddVotingPage}/>*/}
      {/*<Route path="client/orders" component={Orders}/>*/}
      {/*<Route path="client/voting" component={Voting}/>*/}
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
