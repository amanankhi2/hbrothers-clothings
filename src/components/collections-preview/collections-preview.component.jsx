import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import './collections-preview.styles.scss'

const CollectionsPreview = ({ id, title, routeName, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className='preview'>
    {items.slice(0,4).map(({ id, ...shopItems }) => (
      <CollectionItem key={id} {...shopItems} />
    ))}
    </div>
  </div>
);

export default CollectionsPreview;
