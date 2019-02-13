import { combineReducers } from 'redux';

import popup from './popupReducer.js';

const general = combineReducers({
  popup: popup,
})

export default general;

