import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-items/cart-items.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>) ) : 
            (<span className='empty-message'>Your Cart is Empty</span>)
            }
        </div>
        <CustomButton onClick={()=>{ history.push('/Checkout'); dispatch(toggleCartHidden());}}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStatetoProps)(CartDropDown));