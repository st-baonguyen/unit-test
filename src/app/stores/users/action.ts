import * as types from './types';

export const getUsers = () => ({
  type: types.GET_USERS
});

export const getUser = (payload) => ({
  type: types.GET_USER,
  payload
});

export const removeUser = (payload) => ({
  type: types.REMOVE_USER,
  payload
});
