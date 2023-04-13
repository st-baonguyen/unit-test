import { describe, expect, it } from '@jest/globals';
import { isArraySorted } from './array';

describe('check array had sorted module', () => {
  describe('not array', () => {
    it('empty object', () => {
      const inputArray = {};
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('null value', () => {
      const inputArray = null;
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('undefined value', () => {
      const inputArray = undefined;
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('empty value', () => {
      const inputArray = '';
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('number value', () => {
      const inputArray = 2;
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('string value', () => {
      const inputArray = 'string';
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('boolean value', () => {
      const inputArray = true;
      expect(isArraySorted(inputArray)).toBe(false);
    });
  });

  describe('empty array', () => {
    it('empty value', () => {
      const inputArray = [];
      expect(isArraySorted(inputArray)).toBe(false);
    });
  });

  describe('is array', () => {
    it('ascending array', () => {
      const inputArray = [1, 2, 3];
      expect(isArraySorted(inputArray)).toBe(true);
    });
    it('random array', () => {
      const inputArray = [4, 6, 5];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('empty array', () => {
      const inputArray = [];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has 1 element', () => {
      const inputArray = [1];
      expect(isArraySorted(inputArray)).toBe(true);
    });
    it('array has same element', () => {
      const inputArray = [-1, -1];
      expect(isArraySorted(inputArray)).toBe(true);
    });
    it('array normal', () => {
      const inputArray = [-1, 0, 2];
      expect(isArraySorted(inputArray)).toBe(true);
    });
    it('array has only null', () => {
      const inputArray = [null, null];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has only null and undefined', () => {
      const inputArray = [null, undefined];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has null value', () => {
      const inputArray = [0, 1, null];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has undefined value', () => {
      const inputArray = [undefined, 0, 1];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has null and undefined', () => {
      const inputArray = [0, 1, null, undefined];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has boolean value', () => {
      const inputArray = [9, true, 22];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has string', () => {
      const inputArray = [9, 11, '22'];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has child array', () => {
      const inputArray = [9, [1], 3];
      expect(isArraySorted(inputArray)).toBe(false);
    });
    it('array has child object', () => {
      const inputArray = [9, {}, 3];
      expect(isArraySorted(inputArray)).toBe(false);
    });
  });
});
