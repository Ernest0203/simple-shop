const initialState = {
  selectedFilter: 'All',
  categories: [],
}

const filter = (state = initialState, action) => {
  switch(action.type) {

    case 'FETCH_CATEGORIES':
      return { ...state, categories: [ ...action.data ] }
    
    case 'SELECT_FILTER':
      const selectedFilter = action.data ? action.data : 'All'
      return { ...state, selectedFilter: selectedFilter }
    
    default:
      return state;
      
  }
}

export default filter;