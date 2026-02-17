function search(array, search_element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search_element) {
      return true;
    }
  }
  return false;
}

array = [1, 4, 8, 25, 1101, 1400, 2100, 4001];

console.log(search(array, 1400));
