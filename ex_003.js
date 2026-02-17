// Пример пространственный сложности O(1)

function sum(a, b) {
  return a + b;
}

// Примеры линейной сложности

function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

// Случай рекурсии - тоже линейная сложность

function recursiveFunction(n) {
  console.log(n);
  if (n === 0) return;
  recursiveFunction(n - 1);
}

console.log(sum(1, 1));

console.log(createArray(5));

console.log(recursiveFunction(5));
