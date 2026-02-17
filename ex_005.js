// бинарный поиск

const arr = [1, 4, 8, 25, 1101, 1400, 2100, 4001];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = arr[mid];

    console.log(`mid == ${mid}`);
    console.log(`guess == ${guess}`);

    if (guess === target) {
      return mid; // элемент найден
    } else if (guess < target) {
      left = mid + 1; // ищем в правой половине
    } else {
      right = mid - 1; // ищем в левой половине
    }
  }

  return undefined;
}
console.log(binarySearch(arr, 1400));
