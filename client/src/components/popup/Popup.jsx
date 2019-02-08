import React, { Component } from 'react';

import styles from './styles.module.scss';

class Popup extends Component {
  render() {
    const { popupIsOpen } = this.props;
    const style = { display: popupIsOpen ? 'flex' : 'none' };

    return (
      <div className={styles.popup} style={style}>
        <div className={styles.popupContainer}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Popup;