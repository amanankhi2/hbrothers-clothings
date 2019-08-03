import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({shopItems, addCartItem}) => {
    const {imageUrl,name,price} = shopItems;
    return(
    <div className = 'collection-item'>
        <div className = 'image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton inverted onClick={()=>(addCartItem(shopItems))}>Add to Cart</CustomButton>

    </div>

)}

const mapDispatchtoProps = dispatch =>({
    addCartItem: item => (dispatch(addCartItem(item)))
})

export default connect(null,mapDispatchtoProps)(CollectionItem);