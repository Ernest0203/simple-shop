import axios from 'axios';

import { FETCHING_DATA, FETCH_DATA_SUCCESS, ADD_ITEM, DELETE_ITEM } from './actions.js';

export function fetchData(args = {}) {
  dispatch(fetchingData());
  axios.get('user/items')
    .then((res) => {
      dispatch(fetchingDataSucces())
    })
}

export function fetchingData() {
  return {
    type: FETCHING_DATA
  }
}

export function fetchingDataSucces() {
  return {
    type: FETCHING_DATA
  }
}

