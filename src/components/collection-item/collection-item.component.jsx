import React from 'react';
import './collection-item.styles.scss';

import {connect} from 'react-redux';
import {addCartItem} from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem = ({shopItems, addCartItem}) => {
    const {imageUrl,name,price} = shopItems;
    return (
        <CollectionItemContainer>
          <BackgroundImage className='image' imageUrl={imageUrl} />
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton onClick={() => addCartItem(shopItems)} inverted>
            Add to cart
          </AddButton>
        </CollectionItemContainer>
      );
    }

const mapDispatchtoProps = dispatch =>({
    addCartItem: item => (dispatch(addCartItem(item)))
})

export default connect(null,mapDispatchtoProps)(CollectionItem);