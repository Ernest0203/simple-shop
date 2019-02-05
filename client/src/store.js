import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { listing as mainListing } from './pages/mainpage/reducers/listingReducer.js';
import { listing as userListing } from './pages/userpage/reducers/listingReducer.js';

const combinedReducers = combineReducers({
  main: mainListing,
  user: userListing,
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