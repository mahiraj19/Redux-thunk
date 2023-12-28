import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index'; // Replace with your actual reducer

const store = createStore(
  rootReducer,
);

export default store;
