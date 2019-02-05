import { connect } from 'react-redux';

import AddProduct from '../components/addproduct/AddProduct.jsx';

import {
  addItem
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const { data, firstLoad, loading } = state.user;
  return { data, firstLoad, loading };
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (args) => {
    addItem(args);
  }
});

const mergeProps = (stateProps, dispatchProps) => {};

const AddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  //mergeProps,
)(AddProduct);

export default AddProductContainer;
