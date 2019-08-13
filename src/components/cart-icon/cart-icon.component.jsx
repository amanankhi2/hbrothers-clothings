import React from 'react';
import { CartIconContainer,ShoppingIcon,ItemsCount } from './cart-icon.styles';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemsCount>{itemCount}</ItemsCount>
    </CartIconContainer>
);


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStatetoProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStatetoProps,mapDispatchToProps)(CartIcon);