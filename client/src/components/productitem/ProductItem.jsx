import React, { Component } from 'react';

import styles from './styles.module.scss';

class ProductItem extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.itemImage}>
          <a href="">
            {/* <img src="" alt=""/> */}
          </a>
        </div>
        <div className={styles.itemDescription}>
          <h3 className={styles.title}><a href="">Item title</a></h3>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non exercitationem, consequuntur nostrum quis doloremque harum illum ab quasi expedita fugiat explicabo, deserunt porro libero mollitia officia tempore nam quam dolores ducimus debitis repellendus quod quisquam? Excepturi, sunt delectus eligendi eos vero sed quibusdam cupiditate incidunt consectetur, distinctio, id assumenda.
          </div>
          <div className={styles.price}>$15.84</div>
        </div>
      </div>
    );
  }
}

export default ProductItem;