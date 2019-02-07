import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainpage/mainPage.jsx';
import UserPage from '../pages/userpage/userPage.jsx';
import ProductPage from '../pages/product/product.jsx';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/user' component={UserPage}/>
          <Route path='/product_id/:id' component={ProductPage}/>
        </Switch>
      </main>
    )
  }
}

export default Main;