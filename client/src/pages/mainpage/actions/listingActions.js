import axios from 'axios';

import { FETCHING_DATA, FETCH_DATA_SUCCESS } from './constants.js';

const dispatch = window.dispatch;

export const fetchData = (args = {}) => {
  dispatch(fetchingData());
  axios.get('/items', args)
    .then((res) => {
      dispatch(fetchDataSuccess(res.data))
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