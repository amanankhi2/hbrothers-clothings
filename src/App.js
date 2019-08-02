import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.component';

import './App.css';
import Header from './components/header/header.component';
import SigninSignup from './pages/signin-and-signup-page/signin-and-signup.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

class App extends React.Component {
  

  unsubscribeFromAuth = null;

  

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })
     }
     else{
      setCurrentUser(userAuth);
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
    <Header />
    <Switch>
      <Route exact path ='/' component= {HomePage} />
      <Route  path='/Shop' component={ShopPage} />
      <Route path='/Signin' component={SigninSignup} />
    </Switch>
    </div>
  )
  }
  
}

const mapDispatchtoProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
);
export default connect(null,mapDispatchtoProps)(App);
