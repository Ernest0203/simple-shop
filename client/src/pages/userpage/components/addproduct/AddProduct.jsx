import React, { Component } from 'react';

import Button from '../../../../components/button/Button.jsx';

import styles from './styles.module.scss';

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      price: 0,
      category: '',
      image: {},
    };
    this.initialState = { ...this.state };
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

  clearForm = (e) => {
    Object.keys(e.target.parentNode.elements).forEach((key) => {
      e.target.parentNode.elements[key].value = '';
    })
  }

  addItem = (e) => {
    e.preventDefault();
    this.clearForm(e);
    if (this.fieldValidation()) {
      this.props.addItem(this.state);
      this.clearForm(e);
      this.setState(this.initialState);
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
          <select name="category" onChange={(e) => this.changeItemInfo(e)}>
            <option value="" disabled selected hidden>Category</option>
            <option value="electronics">Electronics</option>
          </select>
          <br />
          <input type="file" name='image' onChange={(e) => this.changeItemInfo(e)} />
          <br />
          <button className={styles.button} onClick={(e) => this.addItem(e)}><Button text='Add Product' /></button>
        </form>
      </div>
    );
  }
}

export default AddProduct;