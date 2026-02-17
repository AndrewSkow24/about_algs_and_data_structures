// сортировка выбором

function selectionSort(arr) {
  const n = arr.length;

  // запускаем цикл по длине массива
  for (let i = 0; i < n - 1; i++) {
    // добавляем внутренний второй цикл, где на каждой итерации сдвигаемся вправо (j=i+1)

    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // ставим минимальный элемент в нужное место

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let arr = [6, 1, 2, 8, 10, 3, 7];

console.log(selectionSort(arr));
