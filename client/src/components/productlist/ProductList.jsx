import React, { Component } from 'react';

import ProductItem from '../productitem/ProductItem.jsx';

import styles from './styles.module.scss';

class ProductList extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
          <li><ProductItem /></li>
        </ul>
      </div>
    );
  }
}

export default ProductList;