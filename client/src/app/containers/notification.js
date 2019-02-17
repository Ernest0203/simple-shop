import { connect } from 'react-redux';

import notification from '../../components/notification/Notification.jsx';

const mapStateToProps = (state) => {
  const { text, isOpen, type } = state.general.notification;
  return { text, isOpen, type };
}

export default connect(mapStateToProps, {})(notification);