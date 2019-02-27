import React, { Component } from 'react';

import styles from './styles.module.scss';

class Filter extends Component {
  render() {
    const { categories } = this.props;

    const categoriesList = categories.map((category) => {
      return <li className={styles.filterItem}><a href="">{category.value}</a></li>
    })

    return (
      <div className={styles.filter}>
        <h2 className={styles.filterTitle}>Shop by Category</h2>
        <ul className={styles.filterList}>
          {categoriesList}
        </ul>
      </div>
    );
  }
}

export default Filter;