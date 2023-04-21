import { combineReducers } from 'redux';

import authReducer from '@app/core/auth/auth.reducers';
import userReducer from './users/reducer';

const appReducer = combineReducers({
  authReducer,
  userReducer
});

export default appReducer;
