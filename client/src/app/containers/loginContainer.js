import { connect } from 'react-redux';

import loginComponent from '../components/loginComponent.jsx';

import {
  popupToggle,
  registerUser,
} from '../actions/actions.js';


const mapStateToProps = (state) => {
  const { popupIsOpen, popupType } = state.general.popup;
  return { popupIsOpen, popupType };
}

const mapDispatchToProps = (dispatch) => ({
  popupToggle: (args) => {
    popupToggle(args);
  },
  registerUser: (args) => {
    registerUser(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
