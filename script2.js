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
