import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';
import './App.css';


function App() {
  return (
      // exact for exact match it returns true
    <div>
      <Route exact path ='/' component= {HomePage} />
      <Route  path='/Shop' component={ShopPage} />
    </div>
  );
}

export default App;
