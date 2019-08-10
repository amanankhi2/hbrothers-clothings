import { createSelector } from "reselect";

const COLLECTION_ID_MATCH = {
  hats: 1,
  jackets:2,
  shoes:3,
  womens:4,
  mens:5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = matchCollectionURLPrams => (
  createSelector([selectCollections],
  collections=> collections.find(collection => collection.id === COLLECTION_ID_MATCH[matchCollectionURLPrams])))
;
