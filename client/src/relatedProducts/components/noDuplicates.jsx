const noDuplicates = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    const { feature, value } = arr[i];
    const characteristic = `${feature} ${value}`;
    obj[characteristic] = characteristic;
  }
  return Object.values(obj);
};

export default noDuplicates;
