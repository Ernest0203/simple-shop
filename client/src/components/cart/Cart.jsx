import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

class Cart extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        CART
      </div>
    );
  }
}

export default Cart;