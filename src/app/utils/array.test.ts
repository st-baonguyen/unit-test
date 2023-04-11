import { describe, expect, test } from '@jest/globals';
import { isArraySorted } from './array';

describe('check array had sorted module', () => {
  test('ascending array', () => {
    const inputArray = [1, 2, 3];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('random array', () => {
    const inputArray = [4, 6, 5];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('random array', () => {
    const inputArray = [13, 6, 33, 99, 100];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('empty array', () => {
    const inputArray = [];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('array has 1 element', () => {
    const inputArray = [1];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('array has same element', () => {
    const inputArray = [-1, -1];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('array normal', () => {
    const inputArray = [-1, 0, 2];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('array has only null', () => {
    const inputArray = [null, null, null];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('array has only null and undefined', () => {
    const inputArray = [null, undefined];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('array has null value', () => {
    const inputArray = [0, 1, null];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('array has undefined value', () => {
    const inputArray = [0, 1, undefined];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('array has null and undefined', () => {
    const inputArray = [0, 1, null, undefined];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
  test('ascending array number', () => {
    const inputArray = [9, 11, 22];
    expect(isArraySorted(inputArray)).toBeTruthy();
  });
  test('array has string', () => {
    const inputArray = [9, 11, '22'];
    expect(isArraySorted(inputArray)).toBeFalsy();
  });
});
