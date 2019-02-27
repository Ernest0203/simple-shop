import { connect } from 'react-redux';

import Filter from '../../../components/filter/Filter.jsx';

import {
  
} from '../actions/listingActions.js';


const mapStateToProps = (state) => {
  const { categories } = state.main.filter;
  return { categories };
}

const mapDispatchToProps = (dispatch) => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
