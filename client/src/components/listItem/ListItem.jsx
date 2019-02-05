import React, { Component } from 'react';

import styles from './styles.module.scss';

class ListItem extends Component {
  render() {
    const { name, description, price, image, category } = this.props;

    return (
      <div className={styles.item}>
        <div className={styles.itemImageContainer}>
          <a href="">
            <div className={styles.itemImage}>
              <img className={styles.itemImageImg} src={image} alt=""/>
            </div>
          </a>
        </div>
        <div className={styles.itemDescription}>
          <h3 className={styles.title}><a href="">{name}</a></h3>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{`$${price}`}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;