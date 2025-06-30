
//I-String Manipulation Functions:

// 1- Reverse a String: Write a function that reverses a given string.  IN JS


// split('') → converts the string into an array of characters.

// reverse() → reverses the array.

// join('') → joins the reversed array back into a string.




function Reverse(str){
   let y = str.split('').reverse().join('');

   return y ;


}

// let x=prompt("Entrer la valeur de x");
// console.log("Mot inversé",Reverse(x));



// 2-Count Characters: Create a function that counts the number of characters in a string.

function Count(str){

    let y=str.split('').length;
    return y;

}

// x=prompt("Entrer un mot");
// console.log("Le npmre de Caractère du mot que vous avez entrer",Count(x));



// 3-Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

// .toUpperCase() → méthode JS qui transforme toutes les lettres d’une chaîne en majuscules.


function Maj(str){
    let y= str.split('');
    y[0]=y[0].toUpperCase();
    let z=y.join('')
    return z;
}

x=prompt("Entrer un mot");
console.log("Voila le mot avec premire lettre en maj",Maj(x));


// II-Array Functions:
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
//Sum of Array: Create a function that calculates the sum of all elements in an array.
//Filter Array: Implement a function that filters out elements from an array based on a given condition.


//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.
//Prime Number Check: Create a function to check if a number is prime or not.
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )




