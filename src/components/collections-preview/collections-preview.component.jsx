import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collections-preview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsPreview = ({ collections }) => (
  <div className="collections-preview">
    {collections.map(({ id, ...shopItems }) => (
      <CollectionPreview key={id} {...shopItems} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStatetoProps)(CollectionsPreview);
