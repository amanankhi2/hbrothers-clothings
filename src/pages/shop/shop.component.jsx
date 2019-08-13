import React from "react";
import {Route} from 'react-router-dom';

import {ShopPageContainer} from './shop.styles';

import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({match}) => (
  <ShopPageContainer>
    <Route exact path= {match.path} component ={CollectionsPreview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
  </ShopPageContainer>
);




export default ShopPage;
