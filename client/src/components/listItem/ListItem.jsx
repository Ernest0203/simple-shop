import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

class ListItem extends Component {
  render() {
    const { id, name, description, price, image, category } = this.props;

    return (
      <div className={styles.item}>
        <div className={styles.itemImageContainer}>
          <Link to={{ pathname: `/product_id/${id}`, state: this.props }}>
            <div className={styles.itemImage}>
              <img className={styles.itemImageImg} src={image} alt=""/>
            </div>
          </Link>
        </div>
        <div className={styles.itemDescription}>
          <h3 className={styles.title}><Link to={{ pathname: `/product_id/${id}`, state: this.props }}>{name}</Link></h3>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>{`$${price}`}</div>
        </div>
      </div>
    );
  }
}

export default ListItem;