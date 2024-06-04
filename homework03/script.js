// Задание 1
// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

// let groceriesArr = [
//   { name: "apple", quantity: 5, isBought: false },
//   { name: "banana", quantity: 1, isBought: true },
//   { name: "bubblegum", quantity: 12, isBought: false },
// ];

// function showArr(list) {
//   list.filter((x) => x.isBought == false).forEach((a) => console.log(a.name));
//   list.filter((x) => x.isBought == true).forEach((a) => console.log(a.name));
// }

// function addGrocerie(list, name, quantity) {
//   let findElement = list.find((x) => x.name == name);

//   if (findElement == undefined) {
//     list.push({ name: name, quantity: quantity, isBought: false });
//   }
// }

// addGrocerie(groceriesArr, "dddd", 3);
// showArr(groceriesArr);

// function buyItem(name, list) {
//   let a = list.find((x) => x.name == name);
//   a.isBought = true;
// }

// buyItem("apple", groceriesArr);
// showArr(groceriesArr);

// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

// class CheckItem {
//   constructor(name, quantity, price) {
//     this.name = name;
//     this.quantity = quantity;
//     this.price = price;
//   }
// }

// let shopping = [
//   new CheckItem("apple", 3, 34),
//   new CheckItem("banana", 4, 65),
//   new CheckItem("butter", 1, 32),
// ];

// showCheck(shopping);

// function showCheck(list) {
//   list.forEach((x) =>
//     console.log(`Name: ${x.name}\tQuantity: ${x.quantity}\tPrice: ${x.price}$`)
//   );
// }

// console.log(getTotalPrice(shopping));

// function getTotalPrice(shopping) {
//   let a = shopping.map((x) => x.price * x.quantity);
//   let res = a.reduce((acc, x) => acc + x.price * x.quantity, 0);
//   console.log(res);
// }

// Задание 3
// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

// class CssStyle {
//   constructor(name, value) {
//     this.name = name;
//     this.value = value;
//   }
// }

// let styles = [
//   new CssStyle("color", "red"),
//   new CssStyle(
//     "font-family",
//     "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
//   ),
//   new CssStyle("background-color", "yellow"),
// ];

// setStyle("Hello hello, World", styles);

// function setStyle(text, styles) {
//   let style = "";

//   for (item of styles) {
//     style += item.name + ": " + item.value + "; ";
//   }

//   document.write(`<p style="${style}">${text}</p>`);
// }

// Задание 4
// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфавиту

class ClassRoom {
  constructor(name, quantity, faculty) {
    this.name = name;
    this.quantity = quantity;
    this.faculty = faculty;
  }
}

let rooms = [
  new ClassRoom("1a", 12, "chemistry"),
  new ClassRoom("45b", 34, "english"),
];

showClassRooms(rooms);

function showClassRooms(list) {
  list.forEach((x) => console.log(x));
}

showFacultyRooms(rooms, "english");

function showFacultyRooms(list, faculty) {
  list.filter((y) => y.faculty == faculty).forEach((x) => console.log(x));
}

showGroupRoom(rooms, { name: "456", people: 10, faculty: "chemistry" });

function showGroupRoom(list, group) {
  list
    .filter((y) => y.faculty == group.faculty && y.quantity >= group.people)
    .forEach((x) => console.log(x));
}
