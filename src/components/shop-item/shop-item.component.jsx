import React from 'react';

const ShopItemComponent = ({imageUrl,name,price}) => (
    <div>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div>
            <h3>{name}</h3>
            <span>{price}</span>
        </div>

    </div>

)


export default ShopItemComponent;