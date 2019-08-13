import React from 'react';
import {CartDropdownContainer,CartItems,EmptyMessage,CartCheckoutButton } from './cart-dropdown.styles';

import CartItem from '../cart-items/cart-items.component';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItems>
            {cartItems.length ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>) ) : 
            (<EmptyMessage>Your Cart is Empty</EmptyMessage>)
            }
        </CartItems>
        <CartCheckoutButton onClick={()=>{ history.push('/Checkout'); dispatch(toggleCartHidden());}}>GO TO CHECKOUT</CartCheckoutButton>
    </CartDropdownContainer>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStatetoProps)(CartDropDown));