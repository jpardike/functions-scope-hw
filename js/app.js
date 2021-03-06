/* 

1. Verbal questions
Write answers to the following questions as comments.

1. What is the difference between a parameter and an argument?
2. Within a function, what is the difference between return and console.log?
3. What are the implications of the ability of a function to return a value?


*/

// 1. A parameter is like a placeholder in a function were an argument can be passed in it's place. An argument is something that you pass to a function that fills the parameter that the function needs to run.

// 2. Return returns the result of the function so it can be used outside of it. console.log will make a console log when the function is called and completes without giving access to the result outside the function.

// 3. The implications are that after the function completes, the value that is returned is accessible, which allows us to use the values that functions return elsewhere in our code.


/* 

2. Palindrome again.

Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.

console.log(checkPalindrome("Radar"));
 => true
console.log(checkPalindrome("Borscht"));
=> false

*/

//////////////// I got some help from freeCodeCamp for this one - uses regex to replace anything that is not a letter.

const reg = /[\W_]/g;

function checkPalindrome(str) {
    let setupStr = str.toLowerCase().replace(reg, '');
    let reverse = setupStr.split('').reverse().join('');
    return setupStr === reverse;
}

console.log(checkPalindrome('Radar'));
console.log(checkPalindrome('Borscht'));

/* 

3. Digit Sum

Write a function sumDigits that accepts a number and returns the sum of its digits.

console.log(sumDigits(42));
=> 6;

*/

function sumDigits(num) {
    let sum = 0;
    let numHolder = num.toString().split('').map((i) => { return Number(i); });
    for (let i = 0; i < numHolder.length; i++) {
        sum += numHolder[i];
    }
    return sum;
}

console.log(sumDigits(42));

/* 

4. Pythagoras
Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

hint: discover the Pythagorean Theorem on a website called google.com

hint: checkout the Math methods in javascript

restriction: for this problem, do NOT use Math.hypot() (but for the rest of time, once you've done this problem feel free)

console.log(calculateSide(8, 6));
=> 10

*/

function calculateSide(sideA, sideB) {
    const sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return sideC;
}

console.log(calculateSide(8, 6));

/* 

5. Sum Array
Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Do not use .reduce().

Expected result:

console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21

*/

function sumArray(arr) {
    let sum = 0;
    arr.forEach((e) => {
        sum += e;
    });
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

/* 

6. Prime Numbers
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

Step One
Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

Step Two
Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.



*/

function checkPrime(x) {
    if (x <= 1) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPrime(37));

function printPrimes(x) {
    for (let i = 2; i <= x; i++) {
        let number = checkPrime(i);
        if (number === true) {
            console.log(i);
        }
    }
}

printPrimes(37);