import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss';
import {Link} from 'react-router-dom';

const CollectionPreview = ({ id, title, routeName, items }) => {
 
  return (
  <div className="collection-preview">
    <Link className="title" to={`shop/${routeName}`}>{title.toUpperCase()}</Link>
    <div className='preview'>
    {items.slice(0,4).map((shopItems) => (
      <CollectionItem key={shopItems.id} shopItems= {shopItems} />
    ))}
    </div>
  </div>
)};

export default CollectionPreview;
