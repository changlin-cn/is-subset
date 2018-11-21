const _compareFn = (a, b) => a === b;
/**
 *  Determine if arr1 is a subset of arr2
 * @param {array} arr1
 * @param {array} arr2
 * @param {function} compareFn
 * @returns {boolean}
 */
function isSubset(arr1, arr2, compareFn = _compareFn) {
  if (arr1.length > arr2.length) {
    return false;
  }

  const a1 = [...arr1];
  const a2 = [...arr2];

  for (let i = 0; i < a1.length; i += 1) {
    const current = a1[i];
    const index = a2.findIndex(n => compareFn(current, n));
    if (index === -1) {
      return false;
    }
    a2.splice(index, 1);
  }

  return true;
}

export default isSubset;

