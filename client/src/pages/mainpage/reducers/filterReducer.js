const initialState = {
  categories: [],
}

const filter = (state = initialState, action) => {
  switch(action.type) {

    case 'FETCH_CATEGORIES':
      console.log(action)
      return { ...state, categories: [ ...action.data ] }
    
    default:
      return state;
  }
}

export default filter;