import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetReducer from './greetings/greetings';

const rootReducer = combineReducers({
  greet: greetReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
