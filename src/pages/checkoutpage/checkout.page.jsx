import React from 'react';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, cartItemsTotal } from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';

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
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: cartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);