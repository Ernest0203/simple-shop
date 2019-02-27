import { connect } from 'react-redux';

import AddProduct from '../components/addproduct/AddProduct.jsx';

import {
  addItem
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const { data, firstLoad, loading } = state.user;
  const { user } = state.general.user;
  const { categories } = state.main.filter;
  return { data, firstLoad, loading, categories, user };
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (args) => {
    addItem(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
