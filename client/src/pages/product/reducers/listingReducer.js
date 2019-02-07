import { FETCHING_DATA, FETCH_DATA_SUCCESS } from '../actions/constants.js';

const initialState = {
  data: [],
  loading: false,
  firstLoad: true,
}

export const listing = (state = initialState, action) => {
  switch(action.type) {

    case FETCHING_DATA:
      return { ...state, loading: true }

    case FETCH_DATA_SUCCESS:
      return { 
        ...state,
        data: [ ...action.data ],
        loading: false,
        firstLoad: false,
      }

    case 'ADD_ITEM_SUCCESS':
      const updatedData = state.data.slice(0);
      updatedData.unshift(action.data);
      return {
        ...state,
        data: updatedData,
      }
    
    default:
      return state;
  }
}
