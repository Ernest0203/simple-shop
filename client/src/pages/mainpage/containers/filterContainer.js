import { connect } from 'react-redux';

import Filter from '../../../components/filter/Filter.jsx';

import {
  applyFilter
} from '../actions/filterActions.js';


const mapStateToProps = (state) => {
  const { categories, selectedFilter } = state.main.filter;
  return { categories, selectedFilter };
}

const mapDispatchToProps = (dispatch) => ({
  applyFilter: (args) => {
    applyFilter(args);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
