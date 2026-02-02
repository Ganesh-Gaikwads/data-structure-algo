// 1. Print Numbers from 1 to N

let n = 20;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

// 2.  Print Numbers form  N to 1 without changing the loop condition of above question
for (let i = 1; i <= n; i++) {
  console.log(n - i);
}

// 3. Print  All Even Numbers form one to n;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(`even num : ${i}`);
  } else {
    console.log(`odd : ${i}`);
  }
}

// 4. sum of first N natural numbers

console.time();
let num = 5000000n; //brute force =>> one one try and add it take 9 sec
let sum = 0n; // time complexity 0(1)

for (let i = 1n; i <= num; i++) {
  sum += i;
}
console.log(`Total sum N natural Numbers : ${sum}`);

console.timeEnd();

// second  optimized solution

console.time();

let number = 500; // its taking 0 sec to run
let total = (number * (number + 1)) / 2; // time complexity 0(1)

console.log(total);

console.timeEnd();

// 5. factrorial of n

let n1 = 5;
let product = 1;

for (let i = 1; i <= n1; i++) {
  product *= i;
}

console.log(product);

// 6. calculate the sum of even numbers

let n2 = 10;
let counts = 0;
for (let i = 1; i <= n2; i++) {
  if (i % 2 === 0) {
    counts += i;
  }
}

console.log(counts);

// 7. print square of 1 to n

let n3 = 5;

for (let i = 1; i <= n3; i++) {
  console.log(`square of ${i} = ${i * i}`);
  console.log(Math.pow(i, 2));
}
