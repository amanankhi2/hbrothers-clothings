import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // local storage object 

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage, // default storage method
    whitelist: ['cart'] // list of reducers that we want to store
};


const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer
});


export default persistReducer(persistConfig,rootReducer);
// it gives the modified version of rootReducer with persistConfig
