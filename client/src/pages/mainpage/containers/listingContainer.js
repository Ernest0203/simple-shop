import { connect } from 'react-redux';

import ListingComponent from '../components/listingComponent.jsx';

import {
  fetchData
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const { data, firstLoad, loading } = state.main.listing;
  return { data, firstLoad, loading };
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (args) => {
    fetchData(args);
  }
});

const mergeProps = (stateProps, dispatchProps) => {};

const Listing = connect(
  mapStateToProps,
  mapDispatchToProps,
  //mergeProps,
)(ListingComponent);

export default Listing;