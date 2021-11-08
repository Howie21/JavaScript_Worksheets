/*

To be a good problem solver, it is important to be able to break problems down. 
One way to go about this is to write out the steps it will take to solve the problem. 
These steps are written down in English in a manner that are easily explainable to someone who may not be technical. 
The idea is that in order to code something out, you first need to have a good understanding of what it is you are attempting to solve.
For each of the four problem solving problems below, write out the steps it will take to go about solving the problem. 
For example, once you are done writing out the steps for the “reverse a string” problem, you would then write out the code to solve the problem. 
You would then repeat the process for each ensuing problem. 
Ideally, this will be a good habit that you will develop and carry forward with you for all problems you encounter at devCodeCamp and beyond.


*/

/*
1.	Reverse a string
a.	Write code that takes a string as input and returns the string reversed
b.	i.e. “Hello” will be returned as “olleH”
*/

function reverseString(str) {
    // Use the split() method to return a new array
    let splitString = str.split("");
    // ["h", "e", "l", "l", "o"]
 
    // Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    // "olleh"
    
    //Return the reversed string
    return joinArray; // "olleh"
}
 
let stringReversed = reverseString("hello")
console.log(stringReversed)

/*
2.	Capitalize letter
a.	Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. 
i.e. “hello world” should be outputted as “Hello World”
*/

function capitalizeEachWord(str) {
    
    //Split string into an array at each space(" ")
    let stringArray = str.split(" ");

    //Go over the array and capitalize the letter at the 0 index
    for(let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }

    //Bring it back together with a space in between each string in the array
    let stringOutput = stringArray.join(" ");

    //return the new string
    return stringOutput;
}

let capitalizedString = capitalizeEachWord("davy jones locker");
console.log(capitalizedString);


/*
3.	Compress a string of characters
a.	For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"
*/

function compressString(str) {
    if (str.length ==0) {
        console.log('Please enter valid string.');
        return;
      }
    let output = '';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (str[i] != str[i+1]) {
          output += str[i] + count;
          count = 0;
        }
      }
      console.log(output);
}
compressString("aaabbbbbccccaacccbbbaaabbbaaa");

/*
4.	BONUS CHALLENGE: Palindrome
a.	A word, phrase, or sequence that reads the same backward as forward i.e. madam
b.	Write code that takes a user input and checks to see if it is a Palindrome and reports the result
 */

function checkPalindrome(str) {
    let inputString = str.toLowerCase();
    let reversedString = reverseString(inputString);
    let palindrome = undefined;
    if (inputString == reversedString) {
        palindrome = true;
    } else if (inputString != reversedString) {
        palindrome = false;
    }

    if (palindrome == true) {
        console.log(str + " is a Palindrome!")
    } else {
        console.log(str + " is not a Palindrome!")
    }
}

checkPalindrome("Chief")