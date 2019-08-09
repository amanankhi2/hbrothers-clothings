import SHOP_DATA from "./shopdata";

const INITIAL_VALUE = {
  collection: SHOP_DATA
};

const shopReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
