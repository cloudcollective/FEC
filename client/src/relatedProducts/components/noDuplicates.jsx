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

export default noDuplicateFeatures;
