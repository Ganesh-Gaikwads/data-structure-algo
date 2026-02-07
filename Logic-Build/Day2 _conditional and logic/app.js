// Find the Maximum of Three Numbers

// hard code manuly checking trhough conditions
function maxOfthree(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }

  return max;
}
console.log(maxOfthree(4500, 4500, 534));



// optimized solutions

function MaxNum(a, b, c) {
  return Math.max(a, b, c);
}

console.log(MaxNum(22, 22, 44));



// 2. Check if a Number is Positive, Negative, or Zero

function numCheck(n) {
  if (n > 0) {
    return `${n} : Positive`;
  } else if (n < 0) {
    return `${n} : Negative`;
  } else {
    return "Zero";
  }
}

console.log(numCheck(0));



//3. Calculate Electricity Bill

function calcEl(units) {
  let totalBill = 0;

  if (units <= 100) {
    totalBill = units * 5;
  } else if (units <= 200) {
    totalBill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }
  return `your units used ${units}: ${totalBill} RS`;
}

console.log(calcEl(150));



//4.  Check if a Character is a Vowel or Consonant

function charCheck(str) {
  let char = str.toLowerCase();

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "u" ||
    char === "o"
  ) {
    return `${str}: Vowel`;
  } else {
    return `${str}: consonant`;
  }
}

console.log(charCheck("b"));
console.log(charCheck("a"));
console.log(charCheck("c"));
console.log(charCheck("i"));

// 5. Check if a Year is a Leap Year



function leapYearcheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `Leap Year: ${year}`;
  } else {
    return `Not a leap year :${year}`;
  }
}

console.log(leapYearcheck(2002));
console.log(leapYearcheck(2000));
console.log(leapYearcheck(2004));
console.log(leapYearcheck(2006));
console.log(leapYearcheck(2008));
console.log(leapYearcheck(1996));



//  Homework assignment

// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character

function charTypechacker(input){
  if(input.typeof ==="string"){
    console.log(input);

  }
}

charTypechacker("A")