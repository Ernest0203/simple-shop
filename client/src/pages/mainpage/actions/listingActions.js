import axios from 'axios';

import { FETCHING_DATA, FETCH_DATA_SUCCESS } from './constants.js';

import notification from '../../../app/actions/notification.js';
import { fetchCategories } from './filterActions.js';

const dispatch = window.dispatch;

export const fetchData = (args = {}) => {
  notification.showHide()
  dispatch(fetchingData());
  axios.get('/items', args)
    .then((res) => {
      dispatch(fetchDataSuccess(res.data.items))
      dispatch(fetchCategories(res.data.categories))
  }).catch(err => console.log(err));
};

function fetchingData() {
  return { type: FETCHING_DATA };
};

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  };
};