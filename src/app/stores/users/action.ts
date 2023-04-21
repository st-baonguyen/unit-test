import * as TYPES from './types';

export const getUsers = () => ({
  type: TYPES.GET_USERS
});

export const getUser = (payload) => ({
  type: TYPES.GET_USER,
  payload
});

export const removeUser = (payload) => ({
  type: TYPES.REMOVE_USER,
  payload
});
