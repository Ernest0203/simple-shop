import { combineReducers } from 'redux';

import listing from './listingReducer.js';
import filter from './filterReducer.js';

const main = combineReducers({
  listing: listing,
  filter: filter,
})

export default main;