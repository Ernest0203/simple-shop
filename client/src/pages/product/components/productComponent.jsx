import React, { Component } from 'react';

import Button from '../../../components/button/Button.jsx';

import styles from './styles.module.scss';

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, name, description, image, price } = this.props.data;
    
    return (
      <div className={styles.product}>
        <div className={styles.productImage}>
          <img src={image} alt=""/>
        </div>
        <div className={styles.productDescription}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.description}>{description}</div>
          <div className={styles.price}>Price: <span>${price}</span></div>
          <div className={styles.buttons}>
            <a href="" className={styles.addToCartBtn}><Button text='Add to cart' /></a>
            <a href="" className={styles.removeBtn}><Button text='Remove product' /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;