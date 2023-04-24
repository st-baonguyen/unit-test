import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import appReducer from './reducers';
import { rootSagas } from '.';

const configureStore = (preloadedState?: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [];
  middlewares.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(
    appReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
  sagaMiddleware.run(rootSagas);

  return store;
};

const store = configureStore();

export default store;
