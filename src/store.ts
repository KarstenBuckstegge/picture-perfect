import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  StoreEnhancer,
} from 'redux';
import { createLogger } from 'redux-logger';
import imageReducer from './reducers/images';

interface State {}

export default function create(): Store<State | undefined> {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'test') {
    middlewares.push(createLogger());
  }

  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  ) as StoreEnhancer<State>;

  return createStore(imageReducer, undefined, enhancer);
}
