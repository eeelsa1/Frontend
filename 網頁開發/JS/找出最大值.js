function findBiggest(arr) {
  let length = arr.length;
  let biggest = arr[0];
  for (let i = length; i > 0; i--) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
    return biggest;
  }
}
