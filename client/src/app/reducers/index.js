import { combineReducers } from 'redux';

import popup from './popupReducer.js';
import notification from './notificationReducer.js';

const general = combineReducers({
  popup: popup,
  notification: notification,
})

export default general;

