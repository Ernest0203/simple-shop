import React, { Component } from 'react';

import styles from './styles.module.scss';

class Input extends Component {
  render() {
    const { name, type, placeholder, onChange } = this.props;
    return (
      <div>
        <input className={styles.input} name={name} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}></input>
      </div>
    );
  }
}

export default Input;