import React, { Component } from 'react';

import Filter from '../../components/filter/Filter.jsx';
import ProductList from '../../components/productlist/ProductList.jsx';

import styles from './styles.module.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.leftColumn}>
          <Filter />
        </div>
        <div className={styles.rightColumn}>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default Main;