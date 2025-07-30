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
  //code here
}
