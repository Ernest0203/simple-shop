import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import cartIcon from '../../app/images/shopping-cart.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  popupOpen = (e, type) => {
    e.preventDefault();
    window.document.body.style.overflow = 'hidden';
    this.props.popupToggle(type);
  } 

  logout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { user, userLink } = this.props.data;

    const userMenu = 
      user.login.length > 0 
      ? 
        (
          <div className={styles.userMenuContainer}>
            <a href="#" className={styles.userName}>{user.login}</a>
            <ul className={styles.userMenuList}>
              <li className={styles.userMenuItem}><Link to={userLink}>My shop</Link></li>
              <li className={styles.userMenuItem}><a href="" onClick={(e) => this.logout(e)}>Logout</a></li>
            </ul>
          </div>
        )
      : 
        <div><a href="" onClick={(e) => this.popupOpen(e, 'login')}>Login</a> or <a href="" onClick={(e) => this.popupOpen(e, 'register')}>Register</a></div>

    return (
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem_signin}>
            {userMenu}
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