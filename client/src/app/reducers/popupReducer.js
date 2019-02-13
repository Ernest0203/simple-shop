const initialState = {
  popupIsOpen: false,
  popupType: '',
}

const popup = (state = initialState, action) => {
  switch(action.type) {

    case 'POPUP_TOGGLE':
      return { ...state, popupIsOpen: !state.popupIsOpen, popupType: action.data }
       
    default:
      return state;
  }
}

export default popup;