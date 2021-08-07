import noDupes from './noDuplicates';

const findIndexOf = (arr, str) => {
  let index = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === str) {
      index = i;
      break;
    }
  }
  return index;
};

const ModalFeatures = (currentFeatures, relatedFeatures) => {
  const concatedFeatures = relatedFeatures[1].concat(currentFeatures[1]);
  // eslint-disable-next-line max-len
  const [middleFeatures, leftArr, rightArr] = noDupes.noDuplicateFeatures(concatedFeatures, currentFeatures[1], relatedFeatures[1]);
  const leftFeatures = middleFeatures.slice(0);
  const rightFeatures = middleFeatures.slice(0);

  for (let i = 0; i < middleFeatures.length; i += 1) {
    const feature = middleFeatures[i];
    const leftIndex = findIndexOf(leftArr, feature);
    const rightIndex = findIndexOf(rightArr, feature);
    if (leftIndex !== -1) {
      if (leftArr.length !== middleFeatures.length) {
        leftFeatures[i] = '✓';
      } else {
        leftFeatures[leftIndex] = '✓';
      }
    } else if (leftIndex === -1) {
      leftFeatures[i] = 'X';
    }

    if (rightIndex !== -1) {
      if (rightArr.length !== middleFeatures.length) {
        rightFeatures[i] = '✓';
      } else { rightFeatures[rightIndex] = '✓'; }
    } else if (rightIndex === -1) {
      rightFeatures[i] = 'X';
    }
  }
  const featuresTableData = [];
  for (let i = 0; i < middleFeatures.length; i += 1) {
    const temp = [];
    temp.push(leftFeatures[i]);
    temp.push(middleFeatures[i]);
    temp.push(rightFeatures[i]);
    featuresTableData.push(temp);
  }
  return [featuresTableData];
};
export default ModalFeatures;
