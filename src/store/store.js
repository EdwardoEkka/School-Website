import { configureStore } from '@reduxjs/toolkit';
import navReducer from './reducers/navReducers';
import {thunk} from 'redux-thunk';

const store = configureStore({
  reducer: {
   nav:navReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
