export const isArraySorted = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  const tempArray = [...array];
  return (
    array.length >= 1 &&
    array.every((num) => typeof num === 'number') &&
    JSON.stringify(array) === JSON.stringify(tempArray.sort((a, b) => a - b))
  );
};
