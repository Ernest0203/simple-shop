import React, { Component } from 'react';

import styles from './styles.module.scss';

import { addItem } from '../../actions/actions.js';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: {},
      price: 0,
    }
  }

  uploadImage = (prop) => {
    const reader = new FileReader();
    const file = prop.target.files[0];
    reader.onload = () => {
      const image = {};
      image.name = file.name;
      image.size = file.size;
      image.type = file.type;
      image.data = reader.result;
      this.setState({
        image: image
      })
    };
    reader.readAsBinaryString(file);
  }

  changeItemInfo = (prop) => {
    if (prop.target.type === 'number') {
      this.setState({ [prop.target.name]: +prop.target.value })
    } 
    if (prop.target.name === 'image') {
      this.uploadImage(prop);
    } else this.setState({ [prop.target.name]: prop.target.value })
  }

  fieldValidation = () => {
    return Object.values(this.state).every((key) => {
      if (key !== '' && key !== 0) {
        return true;
      } else return false;
    })
  }

  addItem = (e) => {
    e.preventDefault();
    if (this.fieldValidation()) {
      addItem(this.state);
    } else {
      console.log('Validation error');
      return
    }
  } 

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Add new product</h3>
        <form className={styles.form}>
          <input type="text" className={styles.productTitle} name="name" placeholder="Title" onChange={(e) => this.changeItemInfo(e)} />
          <textarea type="text" className={styles.productDesc} name="description" placeholder="Description" onChange={(e) => this.changeItemInfo(e)} />
          <input type="number" className={styles.productPrice} name="price" min="0" placeholder="Price" onChange={(e) => this.changeItemInfo(e)} />
          <input type="file" name='image' onChange={(e) => this.changeItemInfo(e)} />
          <button onClick={(e) => this.addItem(e)}>Add product</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;