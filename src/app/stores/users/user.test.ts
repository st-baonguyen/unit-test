import * as Reducer from './reducer';

describe('test user', () => {
  describe('test redux', () => {
    it('should return the initial state', () => {
      expect(Reducer.initialState).toEqual({
        data: null,
        error: null
      });
    });
    it('should return the user list from empty to has data', () => {
      expect(Reducer.initialState.data).toHaveLength(10);
    });
  });
  describe('test get user', () => {
    it('get user has been call', () => {});
    it('empty user', () => {});
    it('has user', () => {});
  });
  describe('test get user detail', () => {
    it('get users detail has been called', () => {});
    it('correct user id', () => {});
    it('incorrect user id', () => {});
  });
  describe('test remove user', () => {
    it('remove user has been called', () => {});
    it('remove a user', () => {});
  });
});
