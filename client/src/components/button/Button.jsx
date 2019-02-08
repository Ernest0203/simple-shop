import React, { Component } from 'react';

import styles from './styles.module.scss';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, width, display } = this.props;

    const style = {
      width: `${width}` ,
      display: display
    }

    return (
      <div className={styles.button} style={style}>
        {text}
      </div>
    );
  }
}

export default Button;