import axios from 'axios';

import notification from '../../../app/actions/notification.js';

const dispatch = window.dispatch;

export const fetchCategories = (data) => {
  return {
    type: 'FETCH_CATEGORIES',
    data

  }
}

// export const fetchData = (args = {}) => {
//   notification.showHide()
//   axios.get('/items', args)
//     .then((res) => {
//       dispatch(fetchDataSuccess(res.data.items))
//   }).catch(err => console.log(err));
// };

// function fetchDataSuccess(data) {
//   return {
//     type: 'FETCH_DATA_SUCCESS',
//     data
//   };
// };