const noDuplicateFeatures = (middle, left, right) => {
  const arrayOfFeatures = (arr) => arr.map((obj) => {
    const { feature, value } = obj;
    return `${feature} ${value}`;
  });
  const middleF = {};
  const leftF = arrayOfFeatures(left);
  const rightF = arrayOfFeatures(right);
  for (let i = 0; i < middle.length; i += 1) {
    const { feature, value } = middle[i];
    const characteristic = `${feature} ${value}`;
    middleF[characteristic] = characteristic;
  }

  return [Object.values(middleF), leftF, rightF];
};

const noDuplicateIds = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    obj[arr[i]] = arr[i];
  }
  const relatedProductIds = Object.keys(obj).map((stringNum) => (
    Number(stringNum)
  ));
  return relatedProductIds;
};

export default { noDuplicateFeatures, noDuplicateIds };
