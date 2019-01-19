import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import cartIcon from '../../app/images/shopping-cart.png';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem_signin}>
            <Link to="/user">Sign in!</Link>
          </li>
          <li className={styles.menuItem}>
            <a href=""><img src={cartIcon} alt=""/></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;