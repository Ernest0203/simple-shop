import React, { Component } from 'react';

import styles from './styles.module.scss';

class Popup extends Component {

  popupClose = (e) => {
    e.preventDefault();
    window.document.body.style.overflow = 'visible';
    this.props.popupToggle();
  }

  render() {
    const { popupIsOpen } = this.props;
    const style = { display: popupIsOpen ? 'flex' : 'none' };

    return (
      <div className={styles.popup} style={style} onClick={(e) => this.popupClose(e)}>
        <div className={styles.popupContainer}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Popup;