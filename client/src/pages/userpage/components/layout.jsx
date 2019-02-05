import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ListingContainer from '../containers/listingContainer.js';
import AddProductContainer from '../containers/addProductContainer.js';
import Cart from '../../../components/cart/Cart.jsx';

class Layout extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/user' component={ListingContainer}/>
          <Route path='/user/add_product' component={AddProductContainer}/>
          <Route path='/user/cart' component={Cart}/>
        </Switch>
      </main>
    )
  }
}

export default Layout;