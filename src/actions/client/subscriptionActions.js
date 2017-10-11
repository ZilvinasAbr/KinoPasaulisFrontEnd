import axios from 'axios';
import { push } from 'react-router-redux';
import {
  requestSubscriptions,
  receiveSubscriptions,
  receiveSubscribed,
  requestSubscribed
} from '../../actionCreators/clientActionCreators';

export function getSubscriptions() {
  return dispatch => {
    dispatch(requestSubscriptions());

    return axios.get('/api/client/getSubscriptions')
      .then(response => {
        dispatch(receiveSubscriptions(response.data));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function addSubscription(id) {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/api/client/addSubscription',
      data: id,
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        alert('Sėkmingai užprenumeravote teatrą!');
        dispatch(push('/home'));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function removeSubscription(id) {
  return dispatch => {
    return axios({
      method: 'post',
      url: '/api/client/removeSubscription',
      data: id,
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        alert('Sėkmingai atšaukėte prenumeratą!');
        dispatch(push('/home'));
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export function isSubscribedToTheather(id) {
  return dispatch => {
    dispatch(requestSubscribed());

    return axios.get('/api/client/isSubscribedToTheater?id=' + id)
      .then(response => {
        dispatch(receiveSubscribed(response.data));
      })
      .catch(error => {
        console.error(error);
      })
  }
}