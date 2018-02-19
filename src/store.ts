import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  StoreEnhancer,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import imageReducer from './reducers/images';
import { ImagesSaga } from './sagas/images';

interface State {}

export default function create(): Store<State | undefined> {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'test') {
    middlewares.push(createLogger());
  }

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  ) as StoreEnhancer<State>;

  const store = createStore(imageReducer, undefined, enhancer);

  sagaMiddleware.run(ImagesSaga);

  return store;
}
