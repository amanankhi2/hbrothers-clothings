import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collections-preview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsPreview = ({ collections }) => (
  <div className="collections-preview">
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview key={id} {...collection} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStatetoProps)(CollectionsPreview);
