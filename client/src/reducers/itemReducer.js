import { FETCHING_DATA, FETCH_DATA_SUCCESS, ADD_ITEM, DELETE_ITEM } from '../actions/actions.js';

const initialState = {
  items: [],
  loading: true
}

export default function(state = initialState, action) {
  switch(action.type) {

    case FETCHING_DATA:
      return { ...state, loading: true }

    case FETCH_DATA_SUCCESS:
      return { ...state }
    
    default:
      return state;
  }
}