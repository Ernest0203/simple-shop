import axios from 'axios';

import { FETCHING_DATA, FETCH_DATA_SUCCESS } from './constants.js';
import notification from '../../../app/actions/notification.js';

const dispatch = window.dispatch;

export const fetchCategories = (data) => {
  return {
    type: 'FETCH_CATEGORIES',
    data
  }
}

function selectFilter(arg) {
  return {
    type: 'SELECT_FILTER',
    data: arg
  };
}

export const applyFilter = (args = {}) => {
  notification.showHide();
  axios.get('/items', { params: { ...args } })
    .then((res) => {
      dispatch(fetchDataSuccess(res.data.items));
      dispatch(selectFilter(args.category));
  }).catch(err => console.log(err));
};

function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    data
  };
};