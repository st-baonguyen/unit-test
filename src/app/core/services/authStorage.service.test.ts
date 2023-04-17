import { jest } from '@jest/globals';
import { AuthService } from '../services/auth.service';

const auth = new AuthService();

describe('auth storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  const mockSetToken: any = jest.spyOn(auth, 'setToken');
  describe('get and set token', () => {
    it('setToken function', () => {
      const fakeToken = {
        value: '0x4d224452801ACEd8B2F0aebE155379bb5D594381'
      };
      auth.setToken(JSON.stringify(fakeToken));
      expect(auth.getToken()).toBe(JSON.stringify(fakeToken));
    });
  });
  describe('function called times', () => {
    it('check function called', () => {
      expect(mockSetToken).toHaveBeenCalled();
    });
  });
});
