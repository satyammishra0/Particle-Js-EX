const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 98, 99, 100,
];

function missingNum(array, min, max) {
  const missingNumbers = [];
  const numberSet = new Set(array);

  for (let i = min; i <= max; i++) {
    if (!numberSet.has(i)) {
      missingNumbers.push(i);
    }
  }
  console.log(missingNumbers);
}

missingNum(array, 1, 100);
