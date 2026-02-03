// 1. Print Numbers from 1 to N
/*
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

*/


// Home-work assignment

// 1. Print all numbers divisible by 3 and 5 up to N

let n4 = 30;

for(let i=1; i<=n4; i++){
  if((i%3===0) &&( i%5===0)){
    console.log(i)
  }
}

// 2. ind the sum of all odd numbers up to N

let n5= 10;
let sumOdd = 0;

for(let i=0; i<=n5; i++ ){
  if(i%2!==0){
    sumOdd+=i;
  }
}

console.log(`sum of all odd numbers up to N :${sumOdd} `);



// 3.Print the cubes of numbers from 1 to N

let n6 = 5;

for(let i=1; i<=n6; i++){
  console.log(`cube of ${i} = ${i*i*i}`)
}



//  Print only the numbers that are both even and perfect squares

for(let i=1; i<=20; i++){
   if(i%2==0 && Number.isInteger(Math.sqrt(i))){
     process.stdout.write(i + " ");
   }
  }