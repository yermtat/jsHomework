// Задание 1
// Создать объект, описывающий автомобиль (производитель, 
// модель, год выпуска, средняя скорость), и следующие функции 
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.


// let obj = {
//     manufacturer: "opel",
//     model: "idk",
//     year: 2003,
//     speed: 70,
    
//     showInfo: function () {
//         console.log(`Manufacture: ${this.manufacturer}\nModel: ${this.model}\nYear: ${this.year}\nSpeed: ${this.speed}`)
//     },
//     getTime: function (way) {
//         let time = way / this.speed;
//         let timeOut = parseInt(time / 4);
//         return time + timeOut;
//     },
// }

// obj.showInfo();
// console.log(obj.getTime(560));


// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


function Fraction(numenator, denominator){
    this.numenator = numenator;
    this.denomintaor = denominator;
}

Fraction.prototype.summ = function (frac1, frac2){
    
    commonDunemanator = frac1.denominator * frac2.denominator;

    frac1Num *= parseInt(commonDunemanator / frac1.denominator);
    frac2NUm *= parseInt(commonDunemanator / frac2.denominator);
    
    summNum = frac1num + frac2NUm;

    return new Fraction(summNum, commonDunemanator);

}

let fracc1 = new Fraction(1, 5);
let fracc2 = new Fraction(1, 3);

let fr = fracc1.summ(fracc1. fracc2);
console.log(fr.numenator);
console.log(fr.denominator);



// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество 
// секунд.
// 3. Функция изменения времени на переданное количество 
// минут.
// 4. Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75»


// function MyTime(hours, minutes, seconds){
//     this.hours = hours;
//     this.minutes = minutes;
//     this.seconds = seconds;
// }

// MyTime.prototype.showTime = function() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
// }

// MyTime.prototype.changeSeconds = function(sec){
//     this.seconds += sec;

//     if (this.seconds >= 60){
//         this.minutes += parseInt(this.seconds / 60);
//         this.seconds = this.seconds % 60;
//     }
// }

// MyTime.prototype.changeMinutes = function(min){
//     this.minutes += min;

//     if (this.minutes >= 60){
//         this.hours += parseInt(this.minutes / 60);
//         this.minutes = this.minutes % 60;
//     }
// }

// MyTime.prototype.changeHours = function(hours){
//     this.hours += hours;
// }

// let t = new MyTime(1, 23, 45);

// t.changeSeconds(35);
// t.changeMinutes(60);
// t.changeHours(4);
// t.showTime();
