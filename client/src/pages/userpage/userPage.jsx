import React, { Component } from 'react';

import ProductList from '../../components/productlist/ProductList.jsx';

import styles from './styles.module.scss';

class UserPage extends Component {
  render() {
    return (
      <div className={styles.main}>
        {/* <div className={styles.leftColumn}>
          <Filter />
        </div> */}
        <div className={styles.rightColumn}>
          <ProductList />
        </div>
      </div>
    );
  }
}

export default UserPage;