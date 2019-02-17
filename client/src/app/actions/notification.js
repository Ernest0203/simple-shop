const dispatch = window.dispatch;

const notification = {
  showHide(args) {
    dispatch({ type: 'NOTIF_SHOW', data: args })
    setTimeout(() => {
      dispatch({ type: 'NOTIF_HIDE' })
    }, 1500)
  },
  hide(args) {
    return { 
      type: 'NOTIF_HIDE',
    }
  },
  error(args) {
    dispatch({ type: 'NOTIF_ERROR', data: args })
    setTimeout(() => {
      dispatch({ type: 'NOTIF_HIDE' })
    }, 2500)
  }
};

export default notification;