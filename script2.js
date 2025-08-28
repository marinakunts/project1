// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if (flower1 % 2 === 0 && flower2 % 2 != 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(lovefunc(2, 5));

// let result = "";
// const length = 12;
// const space = "" - 1;
// const star = "*" * 2
// for (let i = 1; i < length; i++) {
//   if "*" rastiot space umienszajetsa

//   result += "\n";
// }

// console.log(result);

// i[0] = 5space + *
// i[1] = 4space + ***
// i[2] = 3space + *****
// i[3] = 2space + *******
// i[4] = 1space + *********
// i[5] = space  + ***********

// 1 = """""*
// 2 = """"***
// 3 = """*****
// 4 = ""*******
// 5 = "*********
// 6 = ***********

const reverseSeq = (n) => {
  let result = [];
  for (let i = n; n > 0; i--) {}

  return [];
};
console.log(reverseSeq(5));

let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}

function simpleMultiplication(number) {
  // your code........

  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
console.log(simpleMultiplication(2));

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

function feast(beast, dish) {
  for (let i = obj; i < animal.length; i++) {
    if (animal === food) {
      return animal;
    } else {
      return "error";
    }
  }
}

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0./;

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sum([1, 4, -8, 8.9]));

//setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation. The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples://

function setAlarm(employed, vacation) {
  if (
    (employed === false && vacation === true) ||
    (employed === false && vacation === false) ||
    (employed === true && vacation === true)
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(setAlarm(false, false));

const setAlarm = (employed, vacation) => employed && !vacation;

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    s += str[i] + str[i];
  }
  return s;
}
console.log(doubleChar("lett"));

//Write a function to split a string and convert it into an array of words.
function stringToArray(string) {
  let s = string.split(" ");
  return s;
}
console.log(stringToArray("hello world"));

//Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
    }
  }
  return small;
}
console.log(findSmallestInt([9, 5, 6, 7, 3]));

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  let fullName = name.split(" ");
  let initials = "";
  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i].length > 0 && fullName[i] !== "") {
      // initials += fullName[i][0];
      initials = fullName[0][0] + "." + fullName[1][0];
    }
  }
  return initials.toUpperCase();
}
console.log(abbrevName("marina Kunts"));

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers. Task Overview: You have to write a function that accepts three parameters: cap is the amount of people the bus can hold excluding the driver. on is the number of people on the bus excluding the driver. wait is the number of people waiting to get on to the bus excluding the driver. If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  let people;
}

//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {}

//Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
console.log(past(1, 2, 4));

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}
console.log(fakeBin("1349338536"));

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l, w) {
  if (l % 2 === 0 && w % 2 === 0) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
};
console.log(areaOrPerimeter(1, 3));

// const areaOrPerimeter = function (l, w) {
//   return l == w ? l * w : 2 * (l + w);
// };

//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. If you want to know more: http://en.wikipedia.org/wiki/DNA In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell). More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

function dnaStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "G") {
      result += "C";
    } else if (dna[i] === "C") {
      result += "G";
    }
  }
  return result;
}
console.log(dnaStrand("ATTC"));

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let result = "";
  for (let i = 0; i < n.length; i++) {
    return result;
  }
}

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
console.log(greet("Marina"));

const greet = (name) => `Hello, ${name} how are you doing today?`;

function noSpace(x) {
  return x.replaceAll(" ", "");
}
console.log(noSpace("ee djjew 933r jajsd"));

//You might know some pretty large perfect squares. But what about the NEXT one? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
function findNextSquare(sq) {}

function nbYear(p0, percent, aug, p) {
  return p0 * percent * aug + p;
}
console.log(nbYear(10, 10, 2, 10));

//We need a function that can transform a number (integer) into a string.
function numberToString(num) {
  return num.toString();
}
console.log(numberToString(123));

//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed. For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  var newStr = "",
    i;

  for (i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) continue;
    newStr += str[i];
  }
  return newStr;
}
console.log(disemvowel("Row ee nl! IIT jweicbso wjerhwo, ghwer yyy"));

disemvowel = (str) => str.replace(/[aeiou]/gi, "");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!(
//Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string. Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
function removeChar(str) {
  return str.slice(1, -1);
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!(
//You get an array of numbers, return the sum of all of the positives ones. If there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
}
console.log(positiveSum([2, 5, 6]));

checkbox.addEventListener("change", () => {
  deals.forEach((deal, index) => {
    const nowPrice = deal.querySelector(".price-now");
    nowPrice.textContent = checkbox.checked
      ? prices[index].discount
      : prices[index].normal;
  });
});

checkbox.addEventListener("change", function () {
  for (let i = 0; i < deals.length; i++) {
    const nowPrice = deals[i].querySelector(".price-now");
    if (checkbox.checked) {
      nowPrice.textContent = prices[i].discount;
    } else {
      nowPrice.textContent = prices[i].normal;
    }
  }
});

document.getElementById("go-to-payment").addEventListener("click", () => {
  const selectedDeal = document.querySelector(".deal.selected");
  const index = parseInt(selectedDeal.dataset.id);

  const titles = ["Kup 1", "Kup 2 + 1 Gratis", "Kup 3 + 2 Gratis"];

  const descriptions = [
    "30-dniowy zapas",
    "90-dniowy zapas + GRATIS Testosteron E-book",
    "150-dniowy zapas + GRATIS Testosteron E-book",
  ];

  const prices = checkbox.checked
    ? ["129,00 zł", "259,00 zł", "389,00 zł"]
    : ["179,00 zł", "359,00 zł", "539,00 zł"];

  // Pobieramy src obrazka z wybranej oferty
  const img = selectedDeal.querySelector("img").getAttribute("src");

  const selectedProduct = {
    tytul: titles[index],
    opis: descriptions[index],
    cena: prices[index],
    obrazek: img,
  };

  localStorage.setItem("wybranyProdukt", JSON.stringify(selectedProduct));
  window.location.href = "platnosc/index.html"; // lub inna nazwa pliku płatności
});

document.getElementById("go-to-payment").addEventListener("click", function () {
  const selectedDeal = document.querySelector(".deal.selected");
  const index = parseInt(selectedDeal.dataset.id);

  let title = "";
  let description = "";
  let price = "";

  if (index === 0) {
    title = "Kup 1";
    description = "30-dniowy zapas";
  } else if (index === 1) {
    title = "Kup 2 + 1 Gratis";
    description = "90-dniowy zapas + GRATIS Testosteron E-book";
  } else {
    title = "Kup 3 + 2 Gratis";
    description = "150-dniowy zapas + GRATIS Testosteron E-book";
  }

  if (checkbox.checked) {
    if (index === 0) price = "129,00 zł";
    else if (index === 1) price = "259,00 zł";
    else price = "389,00 zł";
  } else {
    if (index === 0) price = "179,00 zł";
    else if (index === 1) price = "359,00 zł";
    else price = "539,00 zł";
  }

  const img = selectedDeal.querySelector("img").getAttribute("src");

  const selectedProduct = {
    tytul: title,
    opis: description,
    cena: price,
    obrazek: img,
  };

  localStorage.setItem("wybranyProdukt", JSON.stringify(selectedProduct));
  window.location.href = "platnosc/index.html";
});

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet(name, owner) {
  return `Hello ${name}`;
  return;
}

//Rock Paper Scissors. Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {};

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return num;
  } else {
    return -num;
  }
}
console.log(makeNegative(9));

//
function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForFactor(4, 4));

//
function correct(string) {
  if (string[i] === 5) {
    return string[i] === "S";
  } else if (string[i] === 0) {
    return string[i] === "O";
  } else if (string[i] === 1) {
    return string[i] === "I";
  }
}
console.log(correct("L15OBON"));

//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
function strCount(str, letter) {
  let x = str.split("");
  for (let i = 0; i < x.length; i++) {
    if (x[i] <= x[0]) {
    }
  }
}

//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers. Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total. Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  let base = 40 * d;
  let discount;

  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  } else {
    discount = 0;
  }

  total = base - discount;
  return total;
}
console.log(rentalCarCost(5));

const rentalCarCost = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);

//
function grow(x) {
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum = sum * x[i];
    console.log(sum);
  }
  return sum;
}
console.log(grow([1, 2, 3, 4]));

function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}
//
function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("world"));

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
function between(a, b) {
  let sum = b - a;
  let result = [];

  return [a < b];
}
console.log(between[(1, 2)]);
