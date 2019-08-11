import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from "../../redux/shop/shop.selectors";
import {connect} from 'react-redux';


const CollectionPage = ({collection}) => {
    
    const { title, items} = collection;
    return (
    <div className='collection-page'>
    <span className='title'>{title}</span>  
    <div className='items'>
        {items.map(item => <CollectionItem key={item.id} shopItems={item} />)}
    </div>
    </div>
)};

const mapStatetoProps = (state, ownProps) => (
    {
      collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
  );
  

export default connect(mapStatetoProps)(CollectionPage);