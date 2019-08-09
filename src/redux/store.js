import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'; // For Local Storage

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store); // created persisted version of store

export default {store, persistor};