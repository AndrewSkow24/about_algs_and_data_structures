// пузырьковая сортировка

const arr = [11, 2, 1, 3, 4, 3, 8, 10];

function bubleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      // во внутреннем цикле сравниваются соседние элементы попарно
      if (arr[j] > arr[j + 1]) {
        // если текущий элемент больше предыдущего меняем местами - т.е. происходит всплытие
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubleSort(arr));
