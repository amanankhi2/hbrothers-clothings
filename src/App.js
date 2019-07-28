import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Header from './components/header/header.component';
import SigninSignUp from './pages/signin-and-signup-page/signin-and-signup.component'

function App() {
  return (
      // exact for exact match it returns true
    <div>
    <Header/>
    <Switch>
      <Route exact path ='/' component= {HomePage} />
      <Route  path='/Shop' component={ShopPage} />
      <Route path='/SigninSignUp' component={SigninSignUp} />
    </Switch>
    </div>
  );
}

export default App;
