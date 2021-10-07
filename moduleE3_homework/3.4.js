//Задание №2

function isPrime(number) {
  if (number < 2) {
    console.log(`${number} должно быть больше 1`);
  } else if (number > 1000) {
    console.log(`Число должно быть 1000 либо меньше.`);
  } else if (number == 2) {
    console.log(`${number} - простое число.`)
  } else {
    let limit = Math.sqrt(number);
    let i = 2;
    while (i <= limit) {
      if (number % i === 0) {
        console.log(`${number} не является простым числом.`);
        break;
      }
      i++;
    }
    if (i > limit) console.log(`${number} - простое число.`);
  }
}

isPrime(59)