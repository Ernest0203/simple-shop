import axios from 'axios';

const dispatch = window.dispatch;

export function popupToggle() {
  dispatch({ type: 'POPUP_TOGGLE' })
}