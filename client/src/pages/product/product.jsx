import React, { Component } from 'react';

import Product from './containers/productContainer.js';

import styles from './styles.module.scss';

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.productContainer}>
        <Product data={this.props.location.state} />
      </div>
    );
  }
}

export default ProductPage;