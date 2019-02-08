import React, { Component } from 'react';

import styles from './styles.module.scss';

class Input extends Component {
  render() {
    const { type, placeholder } = this.props;

    return (
      <div>
        <input className={styles.input} type={type} placeholder={placeholder}></input>
      </div>
    );
  }
}

export default Input;