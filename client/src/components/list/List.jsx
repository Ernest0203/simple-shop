import React, { Component } from 'react';

import ListItem from '../listItem/ListItem.jsx';

import styles from './styles.module.scss';

class List extends Component {
  render() {
    const { data } = this.props;
    const list = data.map((item) => {
      return (
        <li>
          <ListItem
            id={item._id} 
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.imageUrl}
          />
        </li>
      )
    })

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          {list}
        </ul>
      </div>
    );
  }
}

export default List;