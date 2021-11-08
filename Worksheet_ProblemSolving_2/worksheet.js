



/**
 1.	Happy Numbers
a.	https://en.wikipedia.org/wiki/Happy_number
b.	A happy number is a number defined by the following process: starting with any positive integer, replace the number by 
    the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
c.	Write a method that determines if a number is happy or sad
 */

function checkIfNumberIsHappy(number, counter=0) {
    isHappy = false;
    if(counter < 12) {
        let numberArray = number.toString().split('').map(number => number*number);
        let sum = numberArray.reduce((num1,num2) => num1 + num2, 0);

        if(sum === 1){
            return isHappy=true;
        }else{
            counter++;
            checkIfNumberIsHappy(sum, counter);
        }
    }
    return isHappy;
}

function happyNumberInterpreter(number) {
    let result = checkIfNumberIsHappy(number);
    if(result == true) {
        console.log(number + " is a Happy Number!");
    } else if(result == false) {
        console.log(number + " is not a Happy Number");
    }
}

happyNumberInterpreter(19)


/*
2.	Prime Numbers
a.	A prime number is a number that is only divisible by one and itself.
b.	Write a method that prints out all prime numbers between 1 and 100 
*/


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function interpreter(n) {
    var arr = [2];
    for (var i = 3; i < n; i+=2) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); //
}

interpreter(100);


/*
3.	Fibonacci
a.	A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
b.	Write a method that does the Fibonacci sequence starting at 1
c.	HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs
*/

function fibonacci(){
    const number = parseInt(prompt('Enter the number of terms: '));
    const start = parseInt(prompt("What Number do you want to start at?"));
    let n1 = 0, n2 = start, nextTerm;

    console.log('Fibonacci Series: ' + number + " terms, starting at " + start);

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fibonacci();