import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';

const CollectionPreview = ({ id, title, routeName, items }) => {
 
  return (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className='preview'>
    {items.slice(0,4).map((shopItems) => (
      <CollectionItem key={shopItems.id} shopItems= {shopItems} />
    ))}
    </div>
  </div>
)};

export default CollectionPreview;
