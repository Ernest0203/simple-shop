import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { popupToggle } from '../../app/actions/actions.js'

import styles from './styles.module.scss';

import cartIcon from '../../app/images/shopping-cart.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  popupOpen = (e, type) => {
    e.preventDefault();
    window.document.body.style.overflow = 'hidden';
    popupToggle(type);
  } 

  render() {
    return (
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem_signin}>
            <Link to="/user">Sign in!</Link>
            <a href="" onClick={(e) => this.popupOpen(e, 'login')}>Login</a> or <a href="" onClick={(e) => this.popupOpen(e, 'register')}>Register</a>
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