import { connect } from 'react-redux';

import headerComponent from '../components/header/headerComponent.jsx';

import {
  popupToggle,
  logoutUser,
  search
} from '../actions/actions.js';


const mapStateToProps = (state) => {
  const { user } = state.general.user;
  return { user };
}

const mapDispatchToProps = (dispatch) => ({
  popupToggle: (args) => {
    popupToggle(args);
  },
  logoutUser: () => {
    logoutUser();
  },
  search: (args) => {
    search(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(headerComponent);