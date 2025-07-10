// 1. Yöntem

function sumNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let toplam = 0;

  for (let i = 0; i < numbers.length; i++) {
    toplam += numbers[i];
  }

  return toplam;
}

// 2. Yöntem

function sumNumbers(numbers) {
   return numbers.reduce((a, b) => a + b, 0);
}
