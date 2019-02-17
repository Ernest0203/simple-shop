import axios from 'axios';

import notification from './notification.js';

const dispatch = window.dispatch;

export function popupToggle(args) {
  dispatch({ 
    type: 'POPUP_TOGGLE',
    data: args
  })
}

export function registerUser(args) {
  axios.post ('/users/register', args)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.response.data)
      notification.error(err.response.data[0].message);
      //notification
    })
}