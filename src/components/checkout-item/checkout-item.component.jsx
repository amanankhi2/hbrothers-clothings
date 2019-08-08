import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeCartItem, addCartItem,removeItem} from '../../redux/cart/cart.actions';



const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='Item' />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
        <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
        <span className='value'>
        {quantity}
        </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </div>
        <span className='price'>$ {price}</span>
        <div className='remove-button' onClick= {()=> clearItem(cartItem) }>&#10005;</div>
    </div>
); }

const mapDispatchtoProps = dispatch => (
    {
        clearItem: item => dispatch(removeCartItem(item)),
        removeItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addCartItem(item))
    }
)


export default connect(null,mapDispatchtoProps)(CheckoutItem);