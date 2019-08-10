import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsforPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)


export const selectCollection = matchCollectionURLPrams => (
  createSelector([selectCollections],
  collections => collections[matchCollectionURLPrams]))
;

