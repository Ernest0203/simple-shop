import React, { Component } from 'react';

import styles from './styles.module.scss';

class Popup extends Component {

  popupClose = (e) => {
    e.preventDefault();
    //if (e.target === $('.callback-overlay__close')) this.props.popupToggle();
    if (e.target !== e.currentTarget) return false;
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