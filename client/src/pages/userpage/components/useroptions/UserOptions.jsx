import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

class UserOptions extends Component {
  render() {
    return (
      <div className={styles.userOptions}>
        <ul className={styles.optionsList}>
          <li className className={styles.optionsItem}><Link to="/user">My Products</Link></li>
          <li className className={styles.optionsItem}><Link to="/user/add_product">Add Product</Link></li>
          <li className className={styles.optionsItem}><Link to="/user/cart">Cart</Link></li>
        </ul>
      </div>
    );
  }
}

export default UserOptions;