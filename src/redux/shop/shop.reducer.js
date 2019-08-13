import SHOP_DATA from "./shopdata";
import ShopActionTypes from "./shop.types";

const INITIAL_VALUE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          collections: action.payload
        }
    default:
      return state;
  }
};

export default shopReducer;
