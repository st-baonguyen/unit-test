import { combineReducers } from 'redux';

import userReducer from './users/reducer';

const appReducer = combineReducers({
  userReducer
});

export default appReducer;
export type RootState = ReturnType<typeof appReducer>;
