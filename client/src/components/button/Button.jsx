import React, { Component } from 'react';

import styles from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text } = this.props;

    return (
      <div className={styles.button}>
        {text}
      </div>
    );
  }
}

export default Button;