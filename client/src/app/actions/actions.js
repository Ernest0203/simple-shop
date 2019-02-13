import axios from 'axios';

const dispatch = window.dispatch;

export function popupToggle(data) {
  dispatch({ 
    type: 'POPUP_TOGGLE',
    data
  })
}