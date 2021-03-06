import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import game_reducer from './game';
import review_reducer from './reviews';
import image_reducer from './image';
import cart_reducer from './cart';
import gameImage_reducer from './gameImage';


const rootReducer = combineReducers({
  session,
  games: game_reducer,
  reviews: review_reducer,
  images: image_reducer,
  carts: cart_reducer,
  gameImages: gameImage_reducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
