import { jest } from '@jest/globals';
import { AuthStorageService } from './authStorage.service';

const auth = new AuthStorageService();

describe('auth storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.clearAllMocks();
  });
  const mockSetToken = jest.spyOn(Storage.prototype, 'setItem');
  const mockGetToken = jest.spyOn(Storage.prototype, 'getItem');
  const mockRemoveToken = jest.spyOn(Storage.prototype, 'removeItem');

  describe('Test method local storage', () => {
    const fakeToken = {
      value: '0x4d224452801ACEd8B2F0aebE155379bb5D594381'
    };
    describe('get Token', () => {
      it('get empty token', () => {
        expect(JSON.parse(auth.getToken())).toBeNull();
        expect(mockGetToken).toHaveBeenCalled();
      });
      it('get exist token', () => {
        auth.setToken(JSON.stringify(fakeToken));
        expect(JSON.parse(auth.getToken())).toMatchObject(fakeToken);
      });
    });
    describe('set token', () => {
      it('setToken', () => {
        auth.setToken(JSON.stringify(fakeToken));
        expect(mockSetToken).toHaveBeenCalled();
      });
      it('set new token override old token', () => {
        const fakeToken2 = {
          value: '0x4d224452801ACEd8B2F0aebE155379bb5D594381'
        };
        auth.setToken(JSON.stringify(fakeToken));
        auth.setToken(JSON.stringify(fakeToken2));
        expect(mockSetToken).toHaveBeenCalledTimes(2);
        expect(JSON.parse(auth.getToken())).toMatchObject(fakeToken2);
      });
    });
    describe('remove Token', () => {
      it('remove empty token', () => {
        auth.removeToken();
        expect(mockRemoveToken).toHaveBeenCalled();
      });
      it('remove exist token', () => {
        auth.setToken(fakeToken);
        auth.removeToken();
        expect(JSON.parse(auth.getToken())).toBeNull();
      });
    });
  });
});
