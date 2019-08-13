import React from "react";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Option
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <Option to="/Shop"> SHOP </Option>
      <Option to="/Shop"> CONTACT US </Option>
      {currentUser ? (
        <Option as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </Option>
      ) : (
        <Option to="/Signin">SIGN IN</Option>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);
