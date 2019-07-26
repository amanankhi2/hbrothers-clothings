import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
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
