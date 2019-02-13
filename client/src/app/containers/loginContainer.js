import { connect } from 'react-redux';

import loginComponent from '../components/loginComponent.jsx';

import {
  popupToggle,
} from '../actions/actions.js';


const mapStateToProps = (state) => {
  const { popupIsOpen, popupType } = state.general.popup;
  return { popupIsOpen, popupType };
}

const mapDispatchToProps = (dispatch) => ({
  popupToggle: (args) => {
    popupToggle(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
