import React, { Component } from 'react';

import styles from './styles.module.scss';

class Filter extends Component {
  render() {
    return (
      <div className={styles.filter}>
        <h2 className={styles.filterTitle}>Shop by Category</h2>
        <ul className={styles.filterList}>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
          <li className={styles.filterItem}><a href="">Electronics</a></li>
        </ul>
      </div>
    );
  }
}

export default Filter;