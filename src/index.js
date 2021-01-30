
// You should implement your task here.

module.exports = function towelSort (arr) {
  if (arr === undefined || !arr.length) return [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) result = result.concat(arr[i]);
    else result = result.concat(arr[i].reverse());
  }
  return result;
}
