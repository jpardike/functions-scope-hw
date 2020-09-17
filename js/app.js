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



*/