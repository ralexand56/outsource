function binarySearch(arr = [], num = 0, start = 0, end = 0) {
  if (start > end) return false;

  const mid = Math.floor((start + end) / 2);
  console.log(mid);

  if (arr[mid] === num) return true;

  if (arr[mid] > num) {
    console.log(start, mid);
    return binarySearch(arr, num, start, mid - 1);
  } else {
    console.log(mid, end);
    return binarySearch(arr, num, mid + 1, end);
  }
}

console.log(binarySearch([1, 3, 5, 7, 8, 9], 2, 0, 5));
