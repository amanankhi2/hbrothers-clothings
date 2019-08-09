import React from "react";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import { selectCollection } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }) => (
  <div className="Collection-Preview">
    {collections.map(({ id, ...shopPreviewData }) => (
      <CollectionsPreview key={id} {...shopPreviewData} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  collections: selectCollection
});

export default connect(mapStatetoProps)(ShopPage);
