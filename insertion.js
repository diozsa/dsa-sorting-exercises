function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
      let j = i;
      while (j >= 0) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
        j--;
      }
  }
  return arr;
}
insertionSort([4, 20, 12, 10, 7, 9]);
module.exports = insertionSort;