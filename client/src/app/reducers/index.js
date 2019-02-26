import { combineReducers } from 'redux';

import popup from './popupReducer.js';
import notification from './notificationReducer.js';
import user from './loginReducer.js';

const general = combineReducers({
  popup: popup,
  notification: notification,
  user: user,
})

export default general;

