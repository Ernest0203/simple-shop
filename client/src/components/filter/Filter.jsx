import React, { Component } from 'react';

import styles from './styles.module.scss';

class Filter extends Component {
  render() {
    const { categories, selectedFilter, applyFilter } = this.props;

    const filter = (e, value) => {
      e.preventDefault();
      const params = value !== 'All'
        ? { category: value }
        : {}
      applyFilter(params);
    }

    const categoriesList = categories.map((category) => {
      const style = {};
      if (selectedFilter === category.value) {
        style['font-family'] = 'OpenSans-Bold';
      }
      return <li className={styles.filterItem}><a href="" onClick={(e) => filter(e, category.value)} style={style}>{category.value}</a></li>
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