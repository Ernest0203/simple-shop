import { connect } from 'react-redux';

import ListingComponent from '../components/listingComponent.jsx';

import {
  fetchData
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const { data, firstLoad, loading } = state.user;
  const { user } = state.general.user;
  return { data, firstLoad, loading, user };
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (args) => {
    fetchData(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);

