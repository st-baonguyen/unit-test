import { createReducer } from '../../../app/core/helpers/reducer-factory';
import { REMOVE_USER, SET_USERS } from './types';

export const initialState = {
  // isLoading: false,
  data: null,
  error: null,
  amountUser: 0
};

const setUsers = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    data: payload
  };
};

const removeUser = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    data: initialState?.data?.filter((user) => user.id !== payload.data)
  };
};

const strategies = {
  [SET_USERS]: setUsers,
  [REMOVE_USER]: removeUser,
  __default__: (state) => state
};

const userReducer = createReducer(strategies, initialState);

export default userReducer;
