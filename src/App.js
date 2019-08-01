import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-and-signup-page/signin-and-signup.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: snapShot.id,
          ...snapShot.data()
        })
      })
     }
     else{
      this.setState({
        currentUser:userAuth
      });
     }
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      // exact for exact match it returns true
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
      <Route exact path ='/' component= {HomePage} />
      <Route  path='/Shop' component={ShopPage} />
      <Route path='/Signin' component={SigninSignup} />
    </Switch>
    </div>
  )
  }
  
}

export default App;
