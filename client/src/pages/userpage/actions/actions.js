import axios from 'axios';

import { ADD_ITEM } from './constants.js';

export function addItem(args = {}) {
  axios.post('/api/items', args)
    .then((res) => {
      //console.log(res);
      
      //dispatch(fetchingDataSucces())
  }).catch(err => console.log(err));
}
