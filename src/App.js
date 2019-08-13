import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkoutpage/checkout.page";

import "./App.css";
import Header from "./components/header/header.component";
import SigninSignup from "./pages/signin-and-signup-page/signin-and-signup.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import setCurrentUser from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsforPreview } from "./redux/shop/shop.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items })) // generate array of selected entities to store in firebase
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      // exact for exact match it returns true
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Shop" component={ShopPage} />
          <Route
            exact
            path="/Signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignup />
            }
          />
          <Route exact path="/Checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsforPreview
});

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(App);
