import React from "react";
import {CartItemContainer,ItemDetails,ItemName,ItemPrice} from './cart-items.styles';

const CartItem = ({item: { name,imageUrl, price, quantity}}) => (
    <CartItemContainer>
        <img src= {imageUrl} alt = 'item'/>
        <ItemDetails>
            <ItemName>{name}</ItemName>
            <ItemPrice>{quantity} x ${price}</ItemPrice>
        </ItemDetails>
    </CartItemContainer>
);

export default CartItem;