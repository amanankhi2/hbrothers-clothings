import React from 'react';
import ShopItemComponent from '../shop-item/shop-item.component'

const ShopItemsComponent = ({id, title, routeName, items}) =>(
    <div>
        <h1>{title}</h1>
        {items.map(({id, ...shopItems})=>(
            <ShopItemComponent key={id} {...shopItems}  />
        ))}
    </div>
)

export default ShopItemsComponent;