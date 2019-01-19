import React, { Component } from 'react';

import Layot from './components/layout.jsx';
import ProductList from '../../components/productlist/ProductList.jsx';
import UserOptions from './components/useroptions/UserOptions.jsx';

import styles from './styles.module.scss';

class UserPage extends Component {
  render() {
    return (
      <div className={styles.userpage}>
        <h1 className={styles.categoryName}>My shop</h1>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <UserOptions />
          </div>
          <div className={styles.rightColumn}>
            <Layot />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;