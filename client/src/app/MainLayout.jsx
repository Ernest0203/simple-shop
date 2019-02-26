import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import MainPage from '../pages/mainpage/mainPage.jsx';
import UserPage from '../pages/userpage/userPage.jsx';
import ProductPage from '../pages/product/product.jsx';

class MainLayout extends Component {
  render () {
    const { user } = this.props;
    const userRoute = user.login
      ? <Route path='/user' component={UserPage}/>
      : <Route path='/user' render={() => (<Redirect to='/' />)} />

    return (
      <main>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          {userRoute}
          <Route path='/product_id/:id' component={ProductPage}/>
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.general.user;
  return { user };
}

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
