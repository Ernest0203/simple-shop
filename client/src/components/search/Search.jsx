import React, { Component } from 'react';

import styles from './styles.module.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    }
  }

  setSearchValue = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  applySearch = (e) => {
    e.preventDefault(e);
    if (this.state.searchValue.length === 0) return;
    this.props.search({ name: this.state.searchValue })
  }

  render() {
    return (
      <div className={styles.search}>
          <input type="search" placeholder="Search..." onChange={(e) => this.setSearchValue(e)}/>
          <a href="" onClick={(e) => this.applySearch(e)}><button type="submit">Search</button></a>
      </div>
    );
  }
}

export default Search;