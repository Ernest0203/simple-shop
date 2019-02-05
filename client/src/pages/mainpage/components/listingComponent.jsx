import React, { Component } from 'react';

import List from '../../../components/list/List.jsx';

class ListingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { firstLoad, fetchData } = this.props;
    if (firstLoad) fetchData();
  }

  render() {
    const { data } = this.props;
    
    return (
      <div>
        <List data={data} />
      </div>
    );
  }
}

export default ListingComponent;