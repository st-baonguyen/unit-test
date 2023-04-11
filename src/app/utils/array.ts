export const isArraySorted = (array) => {
  const tempArray = [...array];
  return (
    array.every((num) => typeof num === 'number') &&
    JSON.stringify(array) === JSON.stringify(tempArray.sort((a, b) => a - b))
  );
};
