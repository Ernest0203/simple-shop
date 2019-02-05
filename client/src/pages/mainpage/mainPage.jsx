import React, { Component } from 'react';

import Listing from './containers/listingContainer.js';

import Filter from '../../components/filter/Filter.jsx';

import styles from './styles.module.scss';

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h1 className={styles.categoryName}>All categories</h1>
        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <Filter />
          </div>
          <div className={styles.rightColumn}>
            <Listing />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;