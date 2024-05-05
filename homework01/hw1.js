// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

console.log(compareNumbers(3, 4));

function compareNumbers(number1, number2) {
  if (number1 < number2) {
    return -1;
  } else if (number > number2) {
    return 1;
  } else {
    return 0;
  }
}

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

console.log(factorial(5));

function factorial(number) {
  if (number == 1) return number;

  return number * factorial(number - 1);
}

// 3. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.

console.log(makeStringNumber(1, 4, 9));

function makeStringNumber(number1, number2, number3) {
  return Number(String(number1) + number2 + number3);
}

// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

console.log(area(5) + " and " + area(6, 6));

function area(width, height = 0) {
  return height == 0 ? width * width : width * height;
}

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.

console.log(isPerfect(28));

function isPerfect(number) {
  let summ = 0;

  for (let i = 1; i < number; i++) {
    if (number % i == 0) summ += i;
  }

  return summ == number;
}

// 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

showPerfect(1, 100);

function showPerfect(min, max) {
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) {
      console.log(i);
    }
  }
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.

showTime(12, 9, 23);

function showTime(hours, min = 0, sec = 0) {
  let date = new Date();

  date.setHours(hours, min, sec);
  console.log(date.toTimeString().substring(0, 9));
}

// 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

console.log(getMySeconds(0, 1, 0));

function getMySeconds(hours, min = 0, sec = 0) {
  return sec + min * 60 + hours * 3600;
}

// 9. Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».

console.log(getMyTime(5455));

function getMyTime(seconds) {
  let hours = parseInt(seconds / 3600);
  let min = parseInt((seconds - hours * 3600) / 60);
  let sec = seconds - min * 60 - hours * 3600;

  let date = new Date();
  date.setHours(hours, min, sec);

  return date.toTimeString().substring(0, 9);
}

// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс».

console.log(compareTime(23, 45, 3, 12, 45, 6));

function compareTime(hour1, min1, sec1, hour2, min2, sec2) {
  let seconds1 = getMySeconds(hour1, min1, sec1);
  let seconds2 = getMySeconds(hour2, min2, sec2);

  let diff = seconds1 - seconds2;
  if (diff < 0) diff * -1;
  return getMyTime(diff);
}
