import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x => x * x);  //inline function with one parameter, if two or more params then you need them in ()

//Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x => x * 2);
// console.log(newNumbers);

////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
// console.log(newNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10);
// console.log(newNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {   //original function
//   return num > 10;
// })

// const newNumber = numbers.findIndex(num => num > 10);  //rewritten function inline with one param
// console.log(newNumber);