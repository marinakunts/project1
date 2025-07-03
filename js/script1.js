// "use strict";

// let number = 5;
// const leftBorderWidth = 1; //camelCase

// number = 10;
// console.log(number);

// //Exercise 1:
// let userName = "John";
// let userNumber = 25;
// userNumber = 24;

// const obj = {
//   a: 50,
// };
// obj.a = 10;
// console.log(obj);

// //Hosting
// console.log(name);
// var name = "Ivan"; //var = let

// // //
// {
//   let result = 50;
// }

// console.log(result);

//10
// let number = 4.6;

// console.log(-4 / 0);
// console.log("string" * 9);

// const persone = "Alex lorem5";

// const bool = true;

// // console.log(something);

// let und;
// console.log(und);

// //Objects
// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };

// // console.log(obj.name)
// console.log(obj['name']);

// //Array
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
// console.log(arr[6])

//11
// const arr = [1, 2, 3];

// arr[10] = "3456";

// console.log(arr);
// const obj = { a: 1, b: 2 };

// const arrObj = {
//   a: "a",
//   1: "b",
//   2: "c",
//   abc: {
//     df: [{}, {}],
//     def: {},
//   },
// };
// const b = "b";

// arrObj[b] = '1234'
// arrObj.b = "1234";
// !!! arrObj['b'] = "1234";

// console.log(arrObj.b);

//Exercise 2
// let storeName = "Shop";
// const storeDescription = {
//   budget: 10000,
//   employees: ["Anna", "Alex", "Anton"],
//   products: {
//     note: 200,
//     book: 300,
//   },

//   open: true,
// };

//12

// alert("Hello");
// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18 yo?", "18");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("What is your lastname?", "");
// answers[2] = prompt("How old are you?", "");

// console.log(answers);
// console.log(typeof null);

// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"

//13
// const category = "toys";

// console.log(`https://someurl.com/${category}`);

// const user = "name";

// alert(`Privet, ${user}`);

//14
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== "6");

// const isChecked = false,
//   isCLose = false;

// console.log(isChecked || !isCLose);

//19
// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("error");
// } else if (num > 100) {
//   console.log("erorr2");
// } else {
//   console.log("ok");
// }

// (num === 50) ? console.log("ok") : console.log("error");
// 4 + 4 binarbyj argument
// 4 - 4 unarnyj argument

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("nie ok");
//     break;
//   case 100:
//     console.log("nie ok");
//     break;
//   case 51:
//     console.log("ok");
//     break;
//   default:
//     console.log("nie okk");
//     break;
// }

//20

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log("I'm ok");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "aaaa");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("all");
// } else {
//   console.log("no");
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
//   console.log("all");
// } else {
//   console.log("no");
// }
// console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

// // let jhnReport,
// //   alexReport,
// //   samReport,
// //   mariaReport = "done";

// // console.log(jhnReport || alexReport || samReport || mariaReport);

// console.log(!0);

// console.log(NaN || 2 || undefined); //2 !!
// console.log(NaN && 2 && undefined); //NaN
// console.log(1 && 2 && 3); //3
// console.log((!1 && 2) || !3); //false
// console.log(25 || (null && !3)); //25 !!
// console.log(NaN || null || !3 || undefined || 5); //5
// console.log(NaN || (null && !3 && undefined) || 5); //false !!
// console.log((5 === 5 && 3 > 1) || 5); //true !

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//   console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!')
// }

// let hamburger; //undefined
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

//21

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

//22
// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }
// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 4; k++) {
//       if (k === 2) break first;
//       console.log(`Third level: ${k}`);
//     }
//   }
// }

// Exercise 3
// function firstTask() {
// let num = 5;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// function secondTask() {

// let i = 20;
// while (i >= 10) {
//   if (i === 13) {
//     break;
//   }
//   console.log(i);
//   i--;
// }

// function thirdTask() {
// let i = 2;
// for (i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// function fourthTask() {
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }
// Место для пятой задачи

// function fifthTask() {
//   const arrayOfNumbers = [];
//   arrayOfNumbers[0] = 5;
//   arrayOfNumbers[1] = 6;
//   arrayOfNumbers[2] = 7;
//   arrayOfNumbers[3] = 8;
//   arrayOfNumbers[4] = 9;
//   arrayOfNumbers[5] = 10;

//   return arrayOfNumbers;
// }

// Exercise 4

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   for (i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }
//   console.log(result)
//   // Не трогаем
//   return result;
// }
// firstTask();
// Место для второй задачи

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, "Shopping", 20, "Homework"];

//   let i = 0;
//   for (i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       data[i] = data[i] * 2;
//     }
//     if (typeof data[i] === "string") {
//       data[i] = data[i] + " - done";
//     }
//   }

//   // Не трогаем
//   return data;
// }

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

//   const data = [5, 10, "Shopping", 20, "Homework"];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }
//   return result;
// }
// console.log(thirdTask());

//Exercise 5
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += "*";

//   }

//   result += "\n";
// }

// console.log(result);

// function doubleNumbers() {
//   const arr = [1, 2, 3, 4, 5];
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       result[i] = arr[i] * 2;
//     }
//   }
//   return result;
// }
// console.log(doubleNumbers()); // [2, 4, 6, 8, 10]

//24

// let num = 20;

// function showFirstMessage(text, arg) {
//   console.log(text);
//   let num = 10;
// }

// showFirstMessage("hello world");
// console.log(num);

// // function calc(a, b) {
// //   return a + b;
// // }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// //Function expresion

// const logger = function () {
//   console.log("Hello");
// };

// logger();

// //Strelocznaja funcja

// const calc = (a, b) => a + b;

//25 //26

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);

//26
// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return;
//   }
//   console.log("done");
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

//Exercise 6

// // Место для первой задачи
// function sayHello(name) {
//   return `Привет, ${name}`;
// }
// sayHello("Антон");

// // Место для второй задачи

// function returnNeighboringNumbers(number) {
//   return [number - 1, number, number + 1];
// }

// console.log(returnNeighboringNumbers(5));

// Место для третьей задачи

// function getMathResult(num, count) {
//   for (let i = 0; i < count; i++) {
//     if (typeof count === "number") {
//       return num * count + "---";
//     } else if (typeof count === "string") {
//       return num * count;
//     } else if (typeof count != "number" || arr < 0) {
//       return num;
//     }
//   }
// }
// console.log(getMathResult(5, 3));
// ?????

//27

// const str = "teSt";
// const arr = [1, 2, 3];

// console.log(str);

// //Metod
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "some fruit";

// console.log(fruit.indexOf("Q"));

// const logg = "hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";

// console.log(parseInt(test));
// console.log(parseFloat(test));

//Exercise 7

// Место для первой задачи
// function calculateVolumeAndArea() {

// }

//30

// function first() {
//   //do smth
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }
// function done() {
//   console.log("I done this lesson");
// }

// learnJS("JavaScript", done);

//31
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("Test");
//   },
// };
// options.makeTest();

// //Destrukturizacia

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// // delete options.name;

// // console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Svoistvo ${i} imeet znaczenie ${options[key][i]}`);
//       // counter++;
//     }
//   } else {
//     console.log(`Svoistvo ${key} imeet znaczenie ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

//32
// const arr = [2, 0, 1, 6, 3];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside array ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

// //34
// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; // ssylka

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// const clone = Object.assign({}, add);

// clone.d = 20;
// // console.log(add);
// // console.log(clone)

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();
// newArray[1] = "aaaaa";
// console.log(newArray);
// console.log(oldArray);

// const video = ["yt", "vimeo", "rt"],
//   blogs = ["wp", "lj", "bl"],
//   internet = [...video, ...blogs, "fb"];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   twoo: 2,
// };

// const newObj = {
//   ...g,
// };

//Exercise 10

// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ["ru", "eng"],
//     programmingLangs: {
//       js: "20%",
//       php: "10%",
//       ruby: "30%",
//     },
//     exp: "1 month",
//   },
//   showAgeAndLangs: function () {
//     console.log(`Мне ${age} и я владею языками: `);
//   },
// };
// let { name } = personalPlanPeter.name.toLowerCase();
// let { age } = personalPlanPeter.age.toLowerCase();
// personalPlanPeter.showAgeAndLangs();
//Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// function showProgrammingLangs(plan) {
//   let str = "";
//   const { programmingLangs } = plan.skills;
//   let key;
//   for (key in programmingLangs) {
//     str += `"Язык ${key}  изучен на ${programmingLangs[key]}"\n`;
//   }
//   return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

//Exercise 11
// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length === "") {
//       return `Семья pusta`;
//     }

//     return `Семья состоит из: ${family.join(" ")}`;
//   }
// }

// console.log(showFamily(family));

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     return arr.join(" ").toLowerCase();
//   }
// }
// standardizeStrings(favoriteCities);

//35
// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("hello");
//   },
// };
// const jonh = Object.create(soldier);
// // const jonh = {
// //   health: 100,
// // };

// // jonh.__proto__ = soldier;
// // Object.setPrototypeOf(jonh, soldier);

// // console.log(jonh.armor);
// jonh.sayHello();

//38

//To string

//1)
// console.log(typeof String(4));
// console.log(String(4));

// //2)

// console.log(typeof (5 + ""));

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";

// console.log(fontSize);

// // To number

// //1)
// console.log(typeof Number("4"));

// //2)
// console.log(typeof +"5");

// //3)
// console.log(typeof parseInt("15px", 10));

// let answ = +prompt("hello", "");

// //To boolean

// //1)
// // 0, '', null, undefined, NaN; - false;

// let switcher = null;

// if (switcher) {
//   console.log("working...");
// }

// switcher = 1;
// if (switcher) {
//   console.log("working...");
// }

// //2)
// console.log(typeof Boolean("4"));

// //3)
// console.log(typeof !!"4444");

//39

// let number = 5;
// debugger;

// function logNumber() {
//   console.log(number);
//   debugger;
// }
// number = 6;
// logNumber();
// debugger;
// number = 8;
// logNumber();
// debugger;

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter++;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// for (let i = 0; i < 9; i++) {
//   for (let j = 0; j < 9; j++) {
//     let num = 3;
//   }
//   console.log(num);
// }

// function foo(a, b) {
//   const [first] = a;
//   const { eng } = b;

//   return `${first} ${eng}`;
// }

// const result = foo(["Hello", "Привет"], { ru: "Мир", eng: "World" });
// console.log(result);

// for (let i = 1; i < 5; i++) {
//   console.log(i + 1);
// }

//40

// let x = 5;
// console.log(x++); //5

// console.log([] + false - null + true); //NaN

// let y = 1;
// let x = (y = 2);
// alert(x); //2

// console.log([] + 1 + 2); //12

// alert("1"[0]); //1

// console.log(2 && 1 && null && 0 && undefined); // null

// console.log(!!(1 && 2) === (1 && 2)); //false

// alert(null || (2 && 3) || 4); //3

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b); //false

// alert(+"Infinity"); // Infinity

// console.log(0 || "" || 2 || undefined || true || false); //2

// Exersice 15

// const restorantData = {
//   menu: [
//     {
//       name: "Salad Caesar",
//       price: "14$",
//     },
//     {
//       name: "Pizza Diavola",
//       price: "9$",
//     },
//     {
//       name: "Beefsteak",
//       price: "17$",
//     },
//     {
//       name: "Napoleon",
//       price: "7$",
//     },
//   ],
//   waitors: [
//     { name: "Alice", age: 22 },
//     { name: "Mike", age: 32 },
//   ],
//   averageLunchPrice: "20$",
//   openNow: true,
// };

// function isOpen(prop) {
//   let answer = "";

//   prop ? (answer = "Открыто") : (answer = "Закрыто");

//   return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//   if (
//     +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
//     +average.slice(0, -1)
//   ) {
//     return "Цена ниже средней";
//   } else {
//     return "Цена выше средней";
//   }
// }

// console.log(
//   isAverageLunchPriceTrue(
//     restorantData.menu[0],
//     restorantData.menu[1],
//     restorantData.averageLunchPrice
//   )
// );

// function transferWaitors(data) {
//   const copy = Object.assign({}, data);

//   copy.waitors = [{ name: "Mike", age: 32 }];

//   return copy;
// }

// transferWaitors(restorantData);

//44
// const btns = document.querySelectorAll("button"),
//   overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Click");
// };
// btn.onclick = function () {
//   alert("2 Click");
// };

// btn.addEventListener("click", () => {
//   alert("Click");
// });
// btn.addEventListener("click", () => {
//   alert("2 Click");
// });

// btn.addEventListener("mouseenter", () => {
//   console.log("Hover");
// });

// btn.addEventListener("mouseenter", (event) => {
//   console.log(event.target);
//   event.target.remove();
// });

// let i = 0;
// const deleteElement = (event) => {
//   console.log(event.currentTarget);
//   console.log(event.type);
//   i++;
//   if (i == 1) {
//     btn.removeEventListener("click", deleteElement);
//   }
// };
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// btns.forEach((btn) => {
//   btn.addEventListener("click", deleteElement, { once: true });
// });

// const link = document.querySelector("a");

// link.addEventListener("click", function (event) {
//   event.preventDefault();

//   console.log(event.target);
// });

//45
// console.log(document.body);

//46
// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//     // result = x * result;
//   }

//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 1); //2
// pow(2, 2); //4
// pow(2, 3); //8
// pow(2, 4); //16

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],

//   html: {
//     basic: [
//       {
//         name: "Peter",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//   },
// };

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecrusion(data) {
//   if (Array.isArray(data)) {
//     let total = 0;

//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }
//     return [total, data.length];
//   } else {
//     let total = [0, 0];

//     for (let SubData of Object.values(data)) {
//       const subDataArr = getTotalProgressByRecrusion(SubData);
//       total[0] += subDataArr[0];
//       total[1] += subDataArr[1];
//     }
//     return total;
//   }
// }

// const result = getTotalProgressByRecrusion(students);

// console.log(result[0] / result[1]);

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("abc")); // "cba"

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello"));

//48
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener("DOMContentLoaded", () => {
//   const box = document.querySelector(".box");

//   box.addEventListener("touchstart", (e) => {
//     e.preventDefault();
//     console.log(start);
//     console.log(e.touches);
//   });
//   // box.addEventListener("touchmove", (e) => {
//   //   e.preventDefault();
//   //   console.log(move);
//   // });
//   // box.addEventListener("touchend", (e) => {
//   //   e.preventDefault();
//   //   console.log(end);
//   // });
// });

// touches
// targetTouches
// changedTouches

//64

// const btn = document.querySelector(".btn");
// let timerId,
//   i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frameElement, 10);

//   function frameElement() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// btn.addEventListener("click", myAnimation);
// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello");
//   id = setTimeout(log, 500);
// }, 500);

//67

// const now = new Date();
// new Date.parse();

// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.getHours());
// // console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();
// alert(`loop ${end - start}`);

//74
//FUnkcja eto objekt

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

const marina = new User("Marina", 25);
const alex = new User("Alex", 30);

marina.hello();

console.log(marina);

//75

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}
showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
  },
};
obj.sum();

//76

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

//81

const persone = {
  name: "Alex",
  phone: "+7444222",
};

console.log(JSON.stringify(JSON.parse(JSON.stringify(persone))));

//85

console.log("Loading...");

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");

    const product = {
      name: "TV",
      price: 2000,
    };
    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.error("Error");
  })
  .finally(() => {
    console.log("Done");
  });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
  console.log("All");
});

//87

//Filter

const names = ["ivan", "ann", "voldemar"];

const shortNames = names.filter((name) => {
  return names.length < 4;
});

console.log(shortNames);

// map

const answers = ["IvAn", "AnnA"];

const result = answers.map((item) => item.toLocaleLowerCase());
console.log(result);

// every / some;

const some = [4, "qwerty", "qwq"];

console.log(some.some((item) => typeof item === "number"));

console.log(some.every((item) => typeof item === "number")); //false
console.log(some.every((item) => typeof item === "string")); //false

// reduce

const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

//Задачи:

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

function showGoodFilms(arr) {
  const films = [
    {
      name: "Titanic",
      rating: 9,
    },
    {
      name: "Die hard 5",
      rating: 5,
    },
    {
      name: "Matrix",
      rating: 8,
    },
    {
      name: "Some bad film",
      rating: 4,
    },
  ];
  const result = films.filter((film) => film.rating >= 8);
  console.log(result);
}

showGoodFilms();
