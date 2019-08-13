import React from "react";
import { Route } from "react-router-dom";

import { ShopPageContainer } from "./shop.styles";

import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot( async snapshot => {
       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       console.log(collectionsMap); 
       updateCollections(collectionsMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <ShopPageContainer>
        <Route exact path={match.path} component={CollectionsPreview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
