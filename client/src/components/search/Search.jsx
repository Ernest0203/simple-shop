import React, { Component } from 'react';

import styles from './styles.module.scss';

class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
          <input type="search" placeholder="Search..."/>
          <button type="submit">Search</button>
      </div>
    );
  }
}

export default Search;