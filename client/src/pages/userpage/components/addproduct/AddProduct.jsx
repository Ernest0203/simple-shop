import React, { Component } from 'react';

import styles from './styles.module.scss';

import { addItem } from '../../actions/actions.js';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      price: 0,
    }
  }

  changeItemInfo = (prop) => {
    this.setState({ 
      [prop.target.name]: prop.target.value
    })
  }

  fieldValidation = () => {
    return Object.values(this.state).every((key) => {
      if (key !== '' && key !== 0 && Number(key) !== 0) {
        return true;
      } else return false;
    })
  }

  addItem = (e) => {
    e.preventDefault();
    if (!this.fieldValidation()) {
      return
    } else addItem(this.state);
  } 

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Add new product</h3>
        <form className={styles.form}>
          <input type="text" className={styles.productTitle} name="title" placeholder="Title" onChange={(e) => this.changeItemInfo(e)} />
          <textarea type="text" className={styles.productDesc} name="desc" placeholder="Description" onChange={(e) => this.changeItemInfo(e)} />
          <input type="number" className={styles.productPrice} name="price" min="0" placeholder="Price" onChange={(e) => this.changeItemInfo(e)} />
          <button onClick={(e) => this.addItem(e)}>Add product</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;