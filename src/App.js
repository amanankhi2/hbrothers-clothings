import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

import './App.css';

const HatsPage = (props) =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)



function App() {
  return (
      // exact for exact match it returns true
    <div>
      <Route exact path ='/' component= {HomePage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
