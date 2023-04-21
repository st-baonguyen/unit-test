import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import appReducer from './reducers';
import appMiddleware from './middleware';
// import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(appMiddleware);

export default store;
