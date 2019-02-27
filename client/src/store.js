import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import main from './pages/mainpage/reducers/index.js';
import { listing as userListing } from './pages/userpage/reducers/listingReducer.js';
import general from './app/reducers/index.js';

const combinedReducers = combineReducers({
  main: main,
  user: userListing,
  general: general,
})

const middleware = [thunk];

const store = createStore(
  combinedReducers, 
  {}, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.dispatch = store.dispatch;

export default store;