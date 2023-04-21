import { createReducer } from '@app/core/helpers/reducer-factory';
import * as TYPE from './types';

const initialState = {
  isLoading: false,
  isProcessing: false,
  hasError: false,
  data: null,
  error: null
};

const getUsers = (state, payload) => ({
  ...state,
  isLoading: false,
  data: payload.data
});

const removeUser = (state, payload) => ({
  ...state,
  isLoading: false,
  data: initialState.data.filter((user) => user.id !== payload.data)
});

const strategies = {
  [TYPE.GET_USERS]: getUsers,
  [TYPE.REMOVE_USER]: removeUser,
  __default__: (state) => state
};

const userReducer = createReducer(strategies, initialState);

export default userReducer;
