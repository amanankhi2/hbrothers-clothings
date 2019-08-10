import React from "react";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import {Route} from 'react-router-dom';
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => (
  <div className="Collections-Preview">
    <Route exact path= {match.path} component ={CollectionsPreview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
  </div>
);




export default ShopPage;
