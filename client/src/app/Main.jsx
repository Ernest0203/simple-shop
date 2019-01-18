import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from '../pages/mainpage/mainPage.jsx';
import UserPage from '../pages/userpage/userPage.jsx';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/user' component={UserPage}/>
        </Switch>
      </main>
    )
  }
}

export default Main;