import axios from 'axios';

import notification from './notification.js';

const dispatch = window.dispatch;

export function popupToggle(args) {
  dispatch({ 
    type: 'POPUP_TOGGLE',
    data: args
  })
}

export function isLoggedIn() {
  axios.get('/users/user')
    .then((res) => {
      if (res.data) {
        dispatch({ type: 'LOGGED_USER', data: res.data });
      } else dispatch({ type: 'RESET_USER' });
    })
}

export function loginUser(args) {
  axios.post('/users/login', args)
    .then((res) => {
      dispatch({ type: 'LOGGED_USER', data: res.data })
      notification.confirm('Login success');
      popupToggle();
    })
    .catch ((err) => notification.error(err.response.data[0].message))
}

export function logoutUser() {
  axios.get('/users/logout')
    .then((res) => {
      if (!res.data) dispatch({ type: 'RESET_USER' });
      return;
    })
}

export function registerUser(args) {
  //isLoggedIn()

  axios.post('/users/register', args)
    .then((res) => {
      popupToggle()
      notification.confirm('User has been created');
      popupToggle('login')
    })
    .catch((err) => {
      notification.error(err.response.data[0].message);
    })
}

export const search = (args = {}) => {
  notification.showHide();
  axios.get('/items', { params: { ...args, search: true } })
    .then((res) => {
      dispatch({ 
        type: 'FETCH_MAIN_DATA_SUCCESS',
        data: res.data.items 
      });
  }).catch(err => notification.error(err.response.data[0].message));
};