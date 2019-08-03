import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-items.component';
import {connect} from 'react-redux';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStatetoProps = ( {cart: {cartItems}} ) =>({
    cartItems
});

export default connect(mapStatetoProps)(CartDropDown);