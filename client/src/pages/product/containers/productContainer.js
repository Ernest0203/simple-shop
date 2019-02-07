import { connect } from 'react-redux';

import ProductComponent from '../components/productComponent.jsx';

import {
  //fetchData
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const {  } = state.user;
  return {  };
}

const mapDispatchToProps = (dispatch) => ({

});

const mergeProps = (stateProps, dispatchProps) => {};

const Product = connect(
  mapStateToProps,
  mapDispatchToProps,
  //mergeProps,
)(ProductComponent);

export default Product;

