import React from 'react';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, cartItemsTotal } from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import StripePaymentButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({total, cartItems })=>(
    
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
                    Product
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Description
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Quantity
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Price
                </span>
            </div>
            <div className='header-block'>
                <span>
                  Remove  
                </span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem = {cartItem}/>
        ))}
        <div className='total'>Total: ${total}</div>
        <div className='test-warning'>
            *Please use the following details to test your card Payments*
            <br/>
            4242 4242 4242 4242 -Exp Date: 01/20 CVV: 123
        </div>    
        <StripePaymentButton price={total}/>
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: cartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);