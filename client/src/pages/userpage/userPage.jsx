import React, { Component } from 'react';

import Layot from './components/layout.jsx';
import UserOptions from './components/useroptions/UserOptions.jsx';

import List from '../../components/list/List.jsx';
import Filter  from '../../components/filter/Filter.jsx';


import styles from './styles.module.scss';

class UserPage extends Component {
  render() {
    return (
      <div className={styles.userpage}>
        <h1 className={styles.categoryName}>My shop</h1>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <UserOptions />
            {/* <Filter /> */}
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