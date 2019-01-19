import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from '../../../components/productlist/ProductList.jsx';
import Cart from '../../../components/cart/Cart.jsx';
import AddProduct from '../components/addproduct/AddProduct.jsx';

class Layout extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/user' component={ProductList}/>
          <Route path='/user/add_product' component={AddProduct}/>
          <Route path='/user/cart' component={Cart}/>
        </Switch>
      </main>
    )
  }
}

export default Layout;